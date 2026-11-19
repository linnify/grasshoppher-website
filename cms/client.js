/**
 * Local, file-based replacement for `@datafycms/js-client`.
 *
 * The website's content used to live in DatafyCMS (api.datafycms.com), which has
 * been shut down. The content was exported into `cms/data/*.json`, with media
 * files under `public/cms-media/`. This module offers the same chainable API the
 * pages already used (collections().fields().filterBy().sortBy().page().list(),
 * record().get()), so the pages only had to change their import.
 *
 * To edit content, change the JSON files in `cms/data/`. Media fields hold an id
 * from `cms/data/media.json`. Reference fields hold the `id` of a record in the
 * referenced collection.
 */

const data = {
  author: require("./data/author.json"),
  cloud_resource: require("./data/cloud_resource.json"),
  discount: require("./data/discount.json"),
  event: require("./data/event.json"),
  faq: require("./data/faq.json"),
  mentor: require("./data/mentor.json"),
  pages: require("./data/pages.json"),
  partnership: require("./data/partnership.json"),
  post: require("./data/post.json"),
  press: require("./data/press.json"),
  tag: require("./data/tag.json"),
};
const media = require("./data/media.json");

// Field schema of the exported collections: media fields and the collection
// each reference field points to.
const MEDIA_FIELDS = {
  author: ["image"],
  cloud_resource: ["image", "document_resource"],
  discount: ["image"],
  event: ["image"],
  mentor: ["professional_profile_image", "funny_profile_image"],
  partnership: ["partner_image", "partner_logo", "benefits_document"],
  post: ["image"],
  press: ["image"],
};
const REFERENCE_FIELDS = {
  author: { posts: "post" },
  post: { author: "author", tags: "tag" },
  tag: { posts: "post" },
};

const SortOperator = { ASC: "asc", DESC: "desc" };

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

const getCollection = (name) => {
  const records = data[name];
  if (!records) {
    throw new NotFoundError(`Unknown collection "${name}"`);
  }
  return records;
};

// Like the CMS, list() and record().get() only return published records.
// Unpublished records (`published_at: null`) are kept only because published
// records reference them, e.g. a post's author.
const isPublished = (record) => record.published_at != null;

const findRecord = (collection, idOrSlug) =>
  getCollection(collection).find(
    (record) => record.id === idOrSlug || record.slug === idOrSlug
  );

// Resolves the value of `field` (or `field.subfield`) on a record, the same way
// the CMS API did: media ids become media objects, references become records.
const expand = (collection, record, field, subfields) => {
  const value = record[field];
  const isMedia = (MEDIA_FIELDS[collection] || []).includes(field);
  const refCollection = (REFERENCE_FIELDS[collection] || {})[field];

  if (!subfields.length || value === null || value === undefined) {
    return value;
  }
  if (!isMedia && !refCollection) {
    return value;
  }

  const resolveOne = (id) => {
    const target = isMedia ? media[String(id)] : findRecord(refCollection, id);
    if (!target) return null;
    return subfields.reduce((acc, sub) => {
      if (sub in target) acc[sub] = target[sub];
      return acc;
    }, {});
  };

  return Array.isArray(value) ? value.map(resolveOne) : resolveOne(value);
};

const project = (collection, record, fields) => {
  if (!fields.length) {
    return { ...record };
  }
  const grouped = new Map();
  fields.forEach((field) => {
    const [name, sub] = field.split(".");
    if (!grouped.has(name)) grouped.set(name, []);
    if (sub) grouped.get(name).push(sub);
  });

  const result = {};
  grouped.forEach((subfields, name) => {
    if (name in record) {
      result[name] = expand(collection, record, name, subfields);
    }
  });
  return result;
};

const asComparable = (value) =>
  typeof value === "string" ? value.toLowerCase() : String(value).toLowerCase();

const matches = (record, { field, operator, value }) => {
  const actual = record[field];
  switch (operator) {
    case "eq":
      return actual !== null && asComparable(actual) === asComparable(value);
    case "isnull": {
      const wantNull = asComparable(value) === "true";
      return (actual === null || actual === undefined) === wantNull;
    }
    case "in":
      return String(value)
        .split(",")
        .map(asComparable)
        .includes(asComparable(actual));
    case "gt":
      return actual !== null && actual > value;
    case "gte":
      return actual !== null && actual >= value;
    case "lt":
      return actual !== null && actual < value;
    case "lte":
      return actual !== null && actual <= value;
    default:
      throw new Error(`Unsupported filter operator "${operator}"`);
  }
};

// Postgres ordering: NULLs sort last ascending and first descending.
const compare = (a, b, direction) => {
  const desc = direction === SortOperator.DESC;
  const aNull = a === null || a === undefined;
  const bNull = b === null || b === undefined;
  if (aNull || bNull) {
    if (aNull && bNull) return 0;
    return (aNull ? 1 : -1) * (desc ? -1 : 1);
  }
  if (a < b) return desc ? 1 : -1;
  if (a > b) return desc ? -1 : 1;
  return 0;
};

class CollectionRecord {
  constructor(collection, recordId) {
    this.collection = collection;
    this.recordId = recordId;
    this._fields = [];
  }

  fields(fields) {
    this._fields = fields;
    return this;
  }

  async get() {
    const record = findRecord(this.collection, this.recordId);
    if (!record || !isPublished(record)) {
      throw new NotFoundError(
        `Record "${this.recordId}" not found in "${this.collection}"`
      );
    }
    return project(this.collection, record, this._fields);
  }
}

class Collection {
  constructor(collection) {
    this.collection = collection;
    this._fields = [];
    this._filters = new Map();
    this._sort = new Map();
    this._page = 1;
    this._pageSize = 20;
  }

  fields(fields) {
    this._fields = fields;
    return this;
  }

  filterBy(field, operator, value) {
    this._filters.set(`${field}-${operator}`, { field, operator, value });
    return this;
  }

  sortBy(field, operator) {
    this._sort.set(field, operator);
    return this;
  }

  // Kept for API compatibility. The site never used search or localization.
  search() {
    return this;
  }

  localize() {
    return this;
  }

  page(page) {
    if (page < 1) throw new Error("Cannot set a page less than 1");
    this._page = page;
    return this;
  }

  pageSize(pageSize) {
    if (pageSize > 100) throw new Error("Page size cannot be bigger than 100");
    this._pageSize = pageSize;
    return this;
  }

  record(recordId) {
    return new CollectionRecord(this.collection, recordId).fields(this._fields);
  }

  async list() {
    const filters = Array.from(this._filters.values());
    const sorts = Array.from(this._sort.entries());

    const records = getCollection(this.collection).filter(
      (record) =>
        isPublished(record) && filters.every((filter) => matches(record, filter))
    );
    if (sorts.length) {
      records.sort((a, b) => {
        for (const [field, direction] of sorts) {
          const result = compare(a[field], b[field], direction);
          if (result !== 0) return result;
        }
        return 0;
      });
    }

    const start = (this._page - 1) * this._pageSize;
    const end = start + this._pageSize;
    return {
      count: records.length,
      next: end < records.length ? this._page + 1 : null,
      previous: this._page > 1 ? this._page - 1 : null,
      results: records
        .slice(start, end)
        .map((record) => project(this.collection, record, this._fields)),
    };
  }
}

const collections = (collection) => new Collection(collection);

module.exports = { collections, SortOperator, NotFoundError };

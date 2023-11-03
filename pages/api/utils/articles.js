const datafyCMS = require("@datafycms/js-client");

export const getArticles = async (page = 1, pageSize = 20) => {
  const response = await datafyCMS
    .collections("post")
    .fields([
      "slug",
      "title",
      "summary",
      "image.url",
      "author.name",
      "published_at",
    ])
    .sortBy("published_at", "desc")
    .pageSize(pageSize)
    .page(page)
    .list();
  return {
    posts: response.results,
    next: response.next,
  };
};

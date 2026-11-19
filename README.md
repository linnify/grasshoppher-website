This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Content

The site's content (blog posts, authors, tags, mentors, events, FAQ, discounts, partnerships, press) used to come from DatafyCMS (`api.datafycms.com`), which has been shut down. It was exported in November 2026 and now lives in this repository:

- `cms/data/*.json` holds one file per collection. Media fields hold an id from `cms/data/media.json`. Reference fields (`post.author`, `post.tags`) hold the `id` of a record in the referenced collection.
- `public/cms-media/` holds the images and documents the content uses, served at `/cms-media/<file>`.
- `cms/client.js` is a small local replacement for `@datafycms/js-client`, with the same `collections(...).fields(...).filterBy(...).sortBy(...).list()` API. Records with `published_at: null` are hidden from listings, as they were in the CMS.

To change content, edit the JSON files and add any new images to `public/cms-media/`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

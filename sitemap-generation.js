const sitemap = require("nextjs-sitemap-generator");

const fs = require("fs");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://grasshoppher.com",
  pagesDirectory: __dirname + "/.next/server/pages",
  ignoreIndexFiles: ["/index"],
  targetDirectory: "public/",
  ignoredExtensions: ["js", "map"],
  pagesConfig: {
    "": {
      priority: "0.92",
      changefreq: "monthly",
    },
    "/business-to-client": {
      priority: "0.9",
      changefreq: "monthly",
    },
    "/business-to-business": {
      priority: "0.9",
      changefreq: "monthly",
    },
    "/partner-with-us": {
      priority: "0.9",
      changefreq: "monthly",
    },
    "/grassbassadors": {
      priority: "0.7",
      changefreq: "monthly",
    },
    "/story": {
      priority: "0.7",
      changefreq: "monthly",
    },
    "/contact": {
      priority: "0.6",
      changefreq: "monthly",
    },
    "/blog": {
      priority: "0.5",
      changefreq: "monthly",
    },
    "/events": {
      priority: "0.5",
      changefreq: "monthly",
    },
    "/press-releases": {
      priority: "0.5",
      changefreq: "monthly",
    },
  },
});
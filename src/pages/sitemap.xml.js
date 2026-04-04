import { siteMeta, sitemapEntries } from "../data/siteContent.js";

function buildUrl(path) {
  return new URL(path, siteMeta.siteUrl).toString();
}

export function GET() {
  const urls = sitemapEntries
    .map((entry) => {
      const lastModifiedTag = entry.lastModified
        ? `<lastmod>${new Date(entry.lastModified).toISOString()}</lastmod>`
        : "";
      const changeFrequencyTag = entry.changeFrequency
        ? `<changefreq>${entry.changeFrequency}</changefreq>`
        : "";
      const priorityTag = entry.priority ? `<priority>${entry.priority}</priority>` : "";

      return `<url><loc>${buildUrl(entry.path)}</loc>${lastModifiedTag}${changeFrequencyTag}${priorityTag}</url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

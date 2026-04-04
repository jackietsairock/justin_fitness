import { siteMeta } from "../data/siteContent.js";

export function GET() {
  const siteUrl = siteMeta.siteUrl.replace(/\/$/, "");
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { newsData } from "../src/data/news-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = "https://misitio.com";

function generateRSS(news) {
  const items = news.map(item => `
    <item>
      <title>${item.title}</title>
      <link>${siteUrl}/news/${item.id}</link>
      <description>${item.excerpt}</description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>
  `).join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Noticias - Mi Proyecto</title>
    <link>${siteUrl}</link>
    <description>Actualizaciones oficiales</description>
    ${items}
  </channel>
</rss>`;
}

const rssContent = generateRSS(newsData);

fs.writeFileSync(
  path.join(__dirname, "../public/rss.xml"),
  rssContent
);

console.log("RSS generado correctamente.");
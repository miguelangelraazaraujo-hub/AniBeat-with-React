import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { newsData } from "../src/data/news-data.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const siteUrl = "https://anibeat-with-react.web.app";

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
  path.join(dirName, "../public/rss.xml"),
  rssContent
);

console.log("RSS generado correctamente.");
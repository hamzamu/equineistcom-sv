// scripts/generate-rss.js
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Only include files under src/content/posts/
const markdownFiles = await glob('src/content/posts/**/*.md');

// Base URL of your site
const baseUrl = 'https://equineist.com';

// Build RSS entries
const items = markdownFiles.map(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Extract frontmatter
  const frontmatterMatch = content.match(/---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*(.*)/i);
  const dateMatch = frontmatter.match(/date:\s*(\d{4}-\d{2}-\d{2})/i);

  const title = titleMatch ? titleMatch[1].trim() : 'Untitled Post';
  const pubDate = dateMatch ? new Date(dateMatch[1]).toUTCString() : new Date().toUTCString();
  const description = content.split('---')[2]?.substring(0, 300).replace(/\n/g, ' ') || '';

  const slug = path.relative('src/content/posts', file).replace(/\.[^/.]+$/, '');
  const link = `${baseUrl}/blog/${slug}`;

  return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${description}]]></description>
      <guid>${link}</guid>
    </item>
  `;
}).filter(Boolean); // Remove any null entries

// Generate RSS XML
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Equineist Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Thoughts on horse riding, equine therapy, and the human-horse bond.</description>
    ${items.join('')}
  </channel>
</rss>
`;

// Write to static directory
fs.writeFileSync('static/rss.xml', rss);

console.log('✅ RSS feed generated at static/rss.xml (for /blog/ posts only)');
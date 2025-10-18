// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Adjust the pattern to match where your Markdown files are stored
const markdownFiles = await glob('src/content/**/*.{md,markdown}');

// Base URL of your site
const baseUrl = 'https://equineist.com';

// Build sitemap entries
const urls = markdownFiles.map(file => {
  let slug = path.relative('src/content', file);

  // Replace folder names in the path with desired routes
  if (slug.startsWith('posts/')) {
    slug = slug.replace(/^posts\//, 'blog/');
  } else if (slug.startsWith('pages/')) {
    slug = slug.replace(/^pages\//, 'p/');
  }

  // Remove file extension
  slug = slug.replace(/\.[^/.]+$/, '');

  const url = `${baseUrl}/${slug}`;

  // Optional: extract last modified date from frontmatter
  const content = fs.readFileSync(file, 'utf8');
  const dateMatch = content.match(/date:\s*(\d{4}-\d{2}-\d{2})/i);
  const lastmod = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];

  return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
});

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('')}
</urlset>`;

// Write to static directory
fs.writeFileSync('static/sitemap.xml', sitemap);

console.log('✅ Sitemap generated at static/sitemap.xml');
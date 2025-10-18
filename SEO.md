<script lang="ts">
  import type { PageData } from './$types';
  import { formatDate } from '$lib/dateUtils';
  import Footer from '../components/footer.svelte';

  // Extract site config from JSON (assuming it's imported or available)
  import Site from '../site.json';

  let { data }: { data: PageData } = $props();

  // Ensure URL is clean
  const canonicalUrl = 'https://equineist.com';
</script>

<!-- SEO Meta Tags -->
<meta charset="{Site.site.meta.charset}" />
<meta name="viewport" content="{Site.site.meta.viewport}" />
<meta name="robots" content="{Site.site.meta.robots}" />
<meta name="googlebot" content="{Site.site.meta.googlebot}" />

<!-- Open Graph / Facebook -->
<meta property="og:title" content="{Site.site.meta.og.title}" />
<meta property="og:description" content="{Site.site.meta.og.description}" />
<meta property="og:image" content="{Site.site.meta.og.image}" />
<meta property="og:type" content="{Site.site.meta.og.type}" />
<meta property="og:url" content="{Site.site.meta.og.url}" />
<meta property="og:site_name" content="{Site.site.title}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="{Site.site.meta.twitter.card}" />
<meta name="twitter:site" content="{Site.site.meta.twitter.site}" />
<meta name="twitter:creator" content="{Site.site.meta.twitter.creator}" />
<meta name="twitter:title" content="{Site.site.meta.og.title}" />
<meta name="twitter:description" content="{Site.site.meta.og.description}" />
<meta name="twitter:image" content="{Site.site.meta.twitter.image}" />

<!-- Canonical URL -->
<link rel="canonical" href={canonicalUrl} />

<!-- Favicon -->
<link rel="icon" href={Site.site.favicon} type="image/x-icon" />
<link rel="apple-touch-icon" href={Site.site.image} />

<!-- Theme Color -->
<meta name="theme-color" content="{Site.site.themeColor}" />

<!-- Preload critical assets -->
<link rel="preload" as="image" href={Site.site.image} />

<!-- Optional: Structured Data (JSON-LD) for better SEO -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "{Site.site.title}",
    "description": "{Site.site.description}",
    "url": "{canonicalUrl}",
    "publisher": {
      "@type": "Organization",
      "name": "{Site.site.author}",
      "logo": {
        "@type": "ImageObject",
        "url": "{Site.site.image}"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{canonicalUrl}/search?q={query}",
      "query-input": "required name=query"
    }
  }
</script>

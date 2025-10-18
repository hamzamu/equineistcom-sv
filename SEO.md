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

<!-- Main Content -->
<section class="w-full sm:w-9/12 mx-auto my-5 bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
  <div class="container mx-auto px-4 py-8">
    <!-- Header Section -->
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      <!-- Sidebar / Navigation -->
      <div class="lg:w-1/3 flex flex-col justify-between h-full space-y-6">
        <div class="bg-gradient-to-br from-amber-600 to-amber-800 text-white p-6 rounded-xl shadow-md">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">{Site.site.title}</h1>
          <p class="text-lg text-amber-100 mb-6 leading-relaxed">{Site.site.description}</p>

          <div class="space-y-3">
            <a href="/blog" class="block w-full text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
              Read All Blogs
            </a>
            <a href="/about" class="block w-full text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
              About
            </a>
            <a href="/contact" class="block w-full text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        <!-- Social Links (Optional) -->
        <div class="flex space-x-4 mt-6">
          {#if Site.site.social.twitter}
            <a href={Site.site.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.094 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          {/if}

          {#if Site.site.social.facebook}
            <a href={Site.site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.15h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          {/if}

          {#if Site.site.social.instagram}
            <a href={Site.site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600 hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.051 1.791.22 2.46.47.659.245 1.24.597 1.82.988.568.383 1.09.873 1.58 1.428.49.555.927 1.154 1.31 1.82.384.666.695 1.37.93 2.11.234.74.407 1.484.52 2.23.113.746.172 1.476.172 2.187 0 .71-.059 1.43-.172 2.18-.113.746-.286 1.49-.52 2.23-.234.74-.545 1.445-.93 2.11-.384.666-.82 1.265-1.31 1.82-.49.555-.97.99-1.58 1.428-.568.383-1.15.735-1.82.988-.669.25-1.396.42-2.46.47-1.024.047-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.051-1.791-.22-2.46-.47-.659-.245-1.24-.597-1.82-.988-.568-.383-1.09-.873-1.58-1.428-.49-.555-.927-1.154-1.31-1.82-.384-.666-.695-1.37-.93-2.11-.234-.74-.407-1.484-.52-2.23-.113-.746-.172-1.476-.172-2.187 0-.71.059-1.43.172-2.18.113-.746.286-1.49.52-2.23.234-.74.545-1.445.93-2.11.384-.666.82-1.265 1.31-1.82.49-.555.97-.99 1.58-1.428.568-.383 1.15-.735 1.82-.988.669-.25 1.396-.42 2.46-.47 1.024-.047 1.378-.06 3.808-.06zM12 20.5c-4.69 0-8.5-3.81-8.5-8.5S7.31 3.5 12 3.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm0-15.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </a>
          {/if}

          {#if Site.site.social.linkedin}
            <a href={Site.site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700 hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.471-1.216 1.637-2.45 3.37-2.45 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          {/if}

          {#if Site.site.social.youtube}
            <a href={Site.site.social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 hover:text-red-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-1.772-2.283C19.893 3.25 12 3.25 12 3.25s-7.894 0-9.728.65a3.018 3.018 0 0 0-1.773 2.283C.25 6.807 0 9.377 0 12s.25 5.193.772 7.686c.34.842 1.034 1.502 1.896 1.896C4.107 20.75 12 20.75 12 20.75s7.894 0 9.728-.65c.86-.393 1.553-1.053 1.896-1.896C23.75 17.193 24 14.623 24 12s-.25-5.193-.772-7.686zM12 15.5V8.5L16.5 12l-4.5 3.5z"/>
              </svg>
            </a>
          {/if}
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each data.posts as post}
        <a href={`/blog/${post.fields.slug}`} class="group block relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
          <img 
            src={'/posts/' + post.fields.cover} 
            alt={post.fields.title} 
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 class="text-xl font-semibold mb-2 line-clamp-2 group-hover:underline">{post.fields.title}</h3>
            <p class="text-sm text-gray-200 mb-3">{formatDate(post.fields.date)}</p>
            <div class="flex justify-end">
              <span class="inline-block bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                Read More
              </span>
            </div>
          </div>
        </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<Footer />
<script lang="ts">
  import type { PageData } from './$types';
  import { formatDate } from '$lib/dateUtils'; 
  import Menu from '../components/menu.svelte';
  import Footer from '../components/footer.svelte';
  import Site from '../site.json'
  let { data }: { data: PageData } = $props();
//   console.log(Site.site)
</script>
<section class="w-full sm:w-9/12 mx-auto bg-amber-300x my-5">
<Menu/>
<!--  -->
<!--  -->
<div class="container mx-auto px-4 py-8">
  <!-- Header Section -->
  <div class="flex flex-col lg:flex-row gap-8 items-start">
    <!-- Text Content -->
    <div class="lg:w-1/3 flex flex-col justify-between  h-full ">
     <div class="flex flex-1 flex-col bg-amber-700x">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{Site.site.title}</h1>
      <p class="text-lg text-gray-600 mb-6">
        {Site.site.description}
      </p>
      <a href="/blog" class="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
        See All Blogs
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414l5.293-5.293-5.293-5.293a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </a>
     </div>
     <!--  -->
    </div>
    <!-- Grid of Blog Cards -->
    <div class="lg:w-2/3x w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1 -->
      {#each data.posts as post}
      <div class="relative overflow-hidden rounded-xl group cursor-pointer">
        <img src={'/posts/'+post.fields.cover} title={post.fields.title} class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"/>
        <div class="absolute inset-0 bg-black/50 bg-opacity-40 group-hover:bg-black/80 transition-all flex flex-col justify-end p-6">
          <h3 class="text-xl font-semibold text-white mb-2"><a href={`/blog/${post.fields.slug}`}>{post.fields.title}</a></h3>
          <p class="text-white text-sm mb-4 line-clamp-2">{formatDate(post.fields.date)}</p>
          <div class="flex justify-end">
            <a href={`/blog/${post.fields.slug}`} class="bg-white rounded-full p-2 text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/each}
    <!-- /holder -->
    </div>
  </div>
</div>
<!--  -->
<div class="container mx-auto px-4 py-8 hidden">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Card 1 -->
    <div class="relative overflow-hidden rounded-xl group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <!-- Background Image -->
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
        alt="Angular Tools" 
        class="w-full h-64 object-cover"
      >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 group-hover:bg-opacity-60 transition-all duration-300">
        <!-- Category Badge -->
        <span class="inline-block bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">Angular</span>
        <!-- Title -->
        <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
          15 best tools that will help you build your website
        </h3>
        <!-- Author -->
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nolan Carder" class="w-8 h-8 rounded-full">
          <span class="text-white text-sm">Nolan Carder</span>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div class="relative overflow-hidden rounded-xl group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <!-- Background Image -->
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
        alt="React Design Systems" 
        class="w-full h-64 object-cover"
      >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 group-hover:bg-opacity-60 transition-all duration-300">
        <!-- Category Badge -->
        <span class="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">React</span>
        <!-- Title -->
        <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
          Most popular design systems to learn from in 2022
        </h3>
        <!-- Author -->
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Anika Franci" class="w-8 h-8 rounded-full">
          <span class="text-white text-sm">Anika Franci</span>
        </div>
      </div>
    </div>
    <!-- Card 3 -->
    <div class="relative overflow-hidden rounded-xl group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <!-- Background Image -->
      <img 
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
        alt="eCommerce Accessibility" 
        class="w-full h-64 object-cover"
      >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 group-hover:bg-opacity-60 transition-all duration-300">
        <!-- Category Badge -->
        <span class="inline-block bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">eCommerce</span>
        <!-- Title -->
        <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
          Understanding accessibility makes you a better
        </h3>
        <!-- Author -->
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Phillip George" class="w-8 h-8 rounded-full">
          <span class="text-white text-sm">Phillip George</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!--  -->
<div class="container mx-auto px-4 py-8 hidden">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Card 1 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Destination Highlights" class="w-40 h-32 object-cover rounded-md flex-shrink-0">
      <div class="flex-1">
        <p class="text-sm font-semibold text-purple-600 mb-2">20 JULY 2022</p>
        <h3 class="text-lg font-medium text-gray-700 mb-4 line-clamp-2">
          Destination Highlights: Discover Your Next Adventure
        </h3>
        <div class="flex items-center space-x-3">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nolan Carder" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-medium text-gray-800">Nolan Carder</p>
            <p class="text-sm text-gray-500">SEO Lead</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 2 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
      <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Travel Tips & Guides" class="w-40 h-32 object-cover rounded-md flex-shrink-0">
      <div class="flex-1">
        <p class="text-sm font-semibold text-purple-600 mb-2">02 FEB 2021</p>
        <h3 class="text-lg font-medium text-gray-700 mb-4 line-clamp-2">
          Travel Tips & Guides: Expert Advice for Your Journeys and Adventures
        </h3>
        <div class="flex items-center space-x-3">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Zaire Vetrovs" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-medium text-gray-800">Zaire Vetrovs</p>
            <p class="text-sm text-gray-500">Designer</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 3 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
      <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Travel Trends" class="w-40 h-32 object-cover rounded-md flex-shrink-0">
      <div class="flex-1">
        <p class="text-sm font-semibold text-purple-600 mb-2">15 OCT 2024</p>
        <h3 class="text-lg font-medium text-gray-700 mb-4 line-clamp-2">
          Travel Trends and Insights: What's New in the World of Travel
        </h3>
        <div class="flex items-center space-x-3">
          <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Anika Franci" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-medium text-gray-800">Anika Franci</p>
            <p class="text-sm text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Card 4 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 flex items-start space-x-4 hover:shadow-md transition-shadow duration-300">
      <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Insider Reviews" class="w-40 h-32 object-cover rounded-md flex-shrink-0">
      <div class="flex-1">
        <p class="text-sm font-semibold text-purple-600 mb-2">11 NOV 2023</p>
        <h3 class="text-lg font-medium text-gray-700 mb-4 line-clamp-2">
          Insider Reviews: Top Hotels, Tours, Destinations and Attractions
        </h3>
        <div class="flex items-center space-x-3">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Phillip George" class="w-10 h-10 rounded-full">
          <div>
            <p class="font-medium text-gray-800">Phillip George</p>
            <p class="text-sm text-gray-500">Content Writer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--  -->
<!-- TODO FIX -->
    <div class="grid grid-cols-1 space-y-2 my-4 flex-1 justify-end justify-items-end bg-amber-500x hidden   ">
            <div class="bg-white rounded-lg border border-gray-200 p-5 flex items-start space-x-4 hover:shadow-sm transition-shadow duration-200">
                <!-- Text Content -->
                <div class="flex-1">
                    <h3 class="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                    US Search and Discovery Trends
                    </h3>
                    <p class="text-gray-600 text-base">Jonathan Hope</p>
                </div>
                <!-- Image -->
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                    alt="Team Collaboration" 
                    class="w-20 h-20 object-cover rounded-md flex-shrink-0"
                >
            </div>
            <!--  -->
            <div class="bg-white rounded-lg border border-gray-200 p-5 flex items-start space-x-4 hover:shadow-sm transition-shadow duration-200">
                <!-- Text Content -->
                <div class="flex-1">
                    <h3 class="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                    US Search and Discovery Trends
                    </h3>
                    <p class="text-gray-600 text-base">Jonathan Hope</p>
                </div>
                <!-- Image -->
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                    alt="Team Collaboration" 
                    class="w-20 h-20 object-cover rounded-md flex-shrink-0"
                >
            </div>
            <!--  -->
            <!--  -->
            <div class="bg-white rounded-lg border border-gray-200 p-5 flex items-start space-x-4 hover:shadow-sm transition-shadow duration-200">
                <!-- Text Content -->
                <div class="flex-1">
                    <h3 class="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                    US Search and Discovery Trends
                    </h3>
                    <p class="text-gray-600 text-base">Jonathan Hope</p>
                </div>
                <!-- Image -->
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                    alt="Team Collaboration" 
                    class="w-20 h-20 object-cover rounded-md flex-shrink-0"
                >
            </div>
            <!--  -->
    </div>
    </section>
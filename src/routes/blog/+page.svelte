<script lang="ts">
  import type { PageData } from './$types';
  import { formatDate } from '$lib/dateUtils'; 
  let { data }: { data: PageData } = $props();
</script>

<main class="hidden">
  <h1>Blog Posts</h1>
  <ul>
    {#each data.posts as post}
      <li>
        <a href={`/posts/${post.fields.slug}`}>{post.fields.title}</a>
        <p>{post.fields.date}</p>
      </li>
    {/each}
  </ul>
</main>




<div class="container mx-auto px-4 py-8">
  <!-- Post 1 -->
   {#each data.posts as post}
  <div class="flex flex-col md:flex-row items-start gap-6 py-6 border-b border-gray-200">
    <!-- Image -->
    <!-- <img 
      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
      alt="Design Systems" 
      
    > -->


    <img src={'/posts/'+post.fields.cover} title={post.fields.title} class="w-full md:w-40 h-32 object-cover rounded-lg"/>

    <!-- Content -->
    <div class="flex-1">
      <h2 class="text-xl font-medium text-gray-800 mb-4 line-clamp-2x">
        <a href={`/blog/${post.fields.slug}`}>{post.fields.title}</a>
      </h2>
      <p class="text-sm text-gray-500 mb-4">{formatDate(post.fields.date)}</p>
      <div class="flex items-center space-x-3 mb-4">
        <!-- <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Nolan Carder" class="w-10 h-10 rounded-full"> -->
        <div>
          <p class="font-medium text-gray-800">Nolan Carder</p>
          <!-- <p class="text-sm text-gray-500">SEO Lead</p> -->
        </div>
      </div>
    </div>

    <!-- Read More Button -->
    <div class="flex-shrink-0">
      <a href={`/blog/${post.fields.slug}`} title={'Read More about:'+post.fields.title} class="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-600 font-medium rounded-lg hover:bg-purple-100 transition-colors duration-200">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414l5.293-5.293-5.293-5.293a1 1 0 111.414-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
  {/each}

</div>

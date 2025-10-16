<script lang="ts">
  import type { PageData } from './$types';
  import { formatDate } from '$lib/dateUtils'; 
  let { data }: { data: PageData } = $props();
</script>





<div class="container mx-auto px-4 py-8">
  <!-- Post 1 -->
   {#each data.posts as post}
  <div class="flex flex-col md:flex-row items-start gap-6 py-6 border-b border-gray-200">
    <!-- Image -->
    <!-- <img 
      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
      alt="Design Systems" 
      
    > -->


    <!-- <img src={'/posts/'+post.fields.cover} title={post.fields.title} class="w-full md:w-40 h-32 object-cover rounded-lg"/> -->

    <!-- Content -->
    <div class="flex-1">
      <h2 class="text-xl font-medium text-gray-800 mb-4 line-clamp-2x">
        <a href={`/p/${post.fields.slug}`}>{post.fields.title}</a>
      </h2>
    </div>
  </div>
  {/each}

</div>

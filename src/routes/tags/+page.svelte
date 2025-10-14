<script>
  export let data;
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-gray-800 mb-8">All Tags</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.tags as tagItem}
      <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          <a href={`/tags/${tagItem.tag}`} class="text-purple-600 hover:underline">
            {tagItem.tag}
          </a>
        </h2>
        <p class="text-gray-600 text-sm">Posts: {tagItem.posts.length}</p>
      </div>
    {/each}
  </div>
</main>
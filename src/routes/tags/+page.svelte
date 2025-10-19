<script>
  import Menu from '../../components/menu.svelte';
  export let data;
</script>

<div class="w-full sm:w-6/12 mx-auto">
  <Menu/>
</div>
<main class="containerx w-full sm:w-6/12 mx-auto px-4 py-8">
  <h1 class="text-xl font-bold text-gray-800 mb-8 px-3">All Equineist.com Posts Tags</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.tags as tagItem}
      <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">
          <a href={`/tags/${tagItem.tag}`} class="text-purple-600 hover:underline uppercase">
            {tagItem.tag}
          </a>
        </h2>
        <p class="text-gray-600 text-sm">Posts: {tagItem.posts.length}</p>
      </div>
    {/each}
  </div>
</main>
<script>
  export let data;
</script>
<main class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-gray-800 mb-8">Posts tagged with "{data.tag}"</h1>
  {#if data.posts.length === 0}
    <p class="text-gray-600">No posts found with this tag.</p>
  {/if}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each data.posts as post}
      <article class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <!-- Image -->
        {#if post.fields.cover}
          <img 
            src={`/post_covers/${post.fields.cover}`} 
            alt={post.fields.title} 
            class="w-full h-48 object-cover"
          />
        {/if}
        <!-- Content -->
        <div class="p-5">
          <h2 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
            <a href={`/blog/${post.fields.slug}`}>{post.fields.title}</a>
          </h2>
          <!-- Summary -->
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
          <!-- Metadata -->
          <div class="flex justify-between items-center text-xs text-gray-500">
            <span>{new Date(post.fields.date).toLocaleDateString()}</span>
            <a href={`/blog/${post.fields.slug}`} class="text-purple-600 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>
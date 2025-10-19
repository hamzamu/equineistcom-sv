import FusionCollection from 'fusionable/FusionCollection';

export function load() {
  // Load all posts from the content directory
  const collection = new FusionCollection()
    .loadFromDir('src/content/posts')
    .orderBy('date', 'desc');

  const posts = collection.getItemsArray();

  // Extract all tags and count their occurrences
  const tagCountMap = new Map<string, number>();

  posts.forEach(post => {
    const tags = typeof post.fields.tags === 'string'
      ? post.fields.tags.split(',').map(tag => tag.trim())
      : Array.isArray(post.fields.tags)
        ? post.fields.tags.map(tag => tag.trim())
        : [];

    tags.forEach(tag => {
      tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
    });
  });

  // Create an array of { tag, count } objects and sort by count descending
  const sortedTagsWithCount = Array.from(tagCountMap.entries())
    .map(([tag, count]) => ({
      tag,
      count,
      posts: posts.filter(post => {
        const postTags = typeof post.fields.tags === 'string'
          ? post.fields.tags.split(',').map(t => t.trim())
          : Array.isArray(post.fields.tags)
            ? post.fields.tags.map(t => t.trim())
            : [];
        return postTags.includes(tag);
      })
    }))
    .sort((a, b) => b.count - a.count); // Descending by count

  // Extract unique tags list (already covered in sortedTagsWithCount)
  const allTags = [...new Set(posts.flatMap(post => {
    if (typeof post.fields.tags === 'string') {
      return post.fields.tags.split(',').map(t => t.trim());
    }
    if (Array.isArray(post.fields.tags)) {
      return post.fields.tags.map(t => t.trim());
    }
    return [];
  }))];

  return {
    tags: sortedTagsWithCount, // Now sorted by count descending
    allTags
  };
}
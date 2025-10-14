import FusionCollection from 'fusionable/FusionCollection';

export function load() {
  // Load all posts from the content directory
  const collection = new FusionCollection()
    .loadFromDir('src/content/posts')
    .orderBy('date', 'desc');
  
  const posts = collection.getItemsArray();
  
  // Extract all tags from all posts
  const allTags = posts.flatMap(post => {
    // Handle both string and array tag formats
    if (typeof post.fields.tags === 'string') {
      return post.fields.tags.split(',').map(tag => tag.trim());
    }
    if (Array.isArray(post.fields.tags)) {
      return post.fields.tags.map(tag => tag.trim());
    }
    return [];
  });
  
  // Create a unique list of tags
  const uniqueTags = [...new Set(allTags)];
  
  // For each tag, filter posts that have that tag
  const tagsWithPosts = uniqueTags.map(tag => {
    const taggedPosts = posts.filter(post => {
      if (typeof post.fields.tags === 'string') {
        return post.fields.tags.split(',').some(t => t.trim() === tag);
      }
      if (Array.isArray(post.fields.tags)) {
        return post.fields.tags.some(t => t.trim() === tag);
      }
      return false;
    });
    
    return {
      tag,
      posts: taggedPosts
    };
  });
  
  return {
    tags: tagsWithPosts,
    allTags: uniqueTags
  };
}
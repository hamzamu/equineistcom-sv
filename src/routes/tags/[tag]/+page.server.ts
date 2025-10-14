import FusionCollection from 'fusionable/FusionCollection';

export function load({ params }) {
  // Load all posts
  const collection = new FusionCollection()
    .loadFromDir('src/content/posts')
    .orderBy('date', 'desc');
  
  const posts = collection.getItemsArray();
  
  // Filter posts that have the current tag
  const filteredPosts = posts.filter(post => {
    if (typeof post.fields.tags === 'string') {
      return post.fields.tags.split(',').some(t => t.trim() === params.tag);
    }
    if (Array.isArray(post.fields.tags)) {
      return post.fields.tags.some(t => t.trim() === params.tag);
    }
    return false;
  });
  
  return {
    posts: filteredPosts,
    tag: params.tag
  };
}
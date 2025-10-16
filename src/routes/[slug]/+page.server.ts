import FusionCollection from 'fusionable/FusionCollection';

export function load({ params }) {
  const collection = new FusionCollection().loadFromDir('src/content/pages');
    const post = collection.getOneBySlug(params.slug);
    
    var pages = ['about','contact']

if (!post || params.slug.includes(pages)) {
    throw new Error('Post not found');
  }

  return { post: post.getItem() };
}


// src/routes/posts/[slug]/+page.server.ts
// import FusionCollection from 'fusionable/FusionCollection';
// export function load({ params }) {
//   try {
//     // Load all posts from the content directory
//     const collection = new FusionCollection().loadFromDir('src/content/pages');
//     // Get post by slug
//     const post = collection.getOneBySlug(params.slug);
//     // If no post found, throw a descriptive error
//     if (!post) {
//       throw new Error('Post not found');
//     }
//     // Return post data safely
//     return { 
//       post: post.getItem() 
//     };
//   } catch (error) {
//     // Log the error for debugging
//     console.error('Error loading blog post:', error);
//     // Throw a user-friendly error
//     throw new Error('Failed to load post. Please check the URL or try again later.');
//   }
// }
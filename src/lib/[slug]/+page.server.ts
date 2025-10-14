



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

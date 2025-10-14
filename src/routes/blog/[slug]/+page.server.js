import FusionCollection from 'fusionable/FusionCollection';

export function load({ params }) {
  const collection = new FusionCollection().loadFromDir('src/content/posts');
  const post = collection.getOneBySlug(params.slug);

  if (!post) {
    throw new Error('Post not found');
  }

  return { post: post.getItem() };
}

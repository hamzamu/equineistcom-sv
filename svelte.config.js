import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';

// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	// preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		prerender: {
			// The default behavior is 'fail', which causes the build to stop.
			// We change it to 'ignore' so that missing routes don't break the build.
			handleUnseenRoutes: ({ routes }) => {
				// Optional: Log a warning to see which routes were not found.
				console.warn('The following routes were marked as prerenderable but not found:', routes);
				
				// Return early (or do nothing) to ignore the error.
				return;
			}
		}},
	extensions: ['.svelte', '.svx']
};

export default config;

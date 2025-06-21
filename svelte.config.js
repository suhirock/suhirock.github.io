import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/**
 * @type {import('mdsvex').MdsvexOptions}
 */
const mdsvexOptions = {
	extensions: ['.md'],
}

const dev = process.argv.includes('dev');

const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? "" : "/suhirock.github.io"
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;

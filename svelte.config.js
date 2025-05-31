import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';


const dev = process.argv.includes('dev');

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? "" : "/suhirock.github.io"
		}
	}
};

export default config;

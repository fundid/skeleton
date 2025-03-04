import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import skeletonPluginWatcher from './vite-plugin-skeleton-plugin-watcher';
import sveld from './vite-plugin-sveld';

// Import package.json version
import { readFileSync } from 'fs';
const json = readFileSync('../../packages/skeleton/package.json', 'utf8');
const pkg = JSON.parse(json);

const config: UserConfig = {
	plugins: [sveltekit(), sveld(), skeletonPluginWatcher()],
	define: {
		__PACKAGE__: pkg
	}
};

export default config;

import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: '@starter-ui/theme',
			fileName: (format) => `index.${format}.js`,
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [dts()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});

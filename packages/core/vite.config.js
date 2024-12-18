import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: '@starter-ui/core',
			fileName: function (format) {
				return 'index.'.concat(format, '.js');
			},
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'react',
					'react-dom': 'ReactDOM',
					tailwindcss: 'tailwindcss',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [react(), dts()],
});

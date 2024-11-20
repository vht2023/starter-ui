// vite.config.js
import { defineConfig } from "file:///C:/Users/thien.vo/Documents/WORK/starter-ui/packages/core/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/thien.vo/Documents/WORK/starter-ui/packages/core/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import dts from "file:///C:/Users/thien.vo/Documents/WORK/starter-ui/packages/core/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\thien.vo\\Documents\\WORK\\starter-ui\\packages\\core";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
      name: "@starter-ui/core",
      fileName: function(format) {
        return "index.".concat(format, ".js");
      }
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0aGllbi52b1xcXFxEb2N1bWVudHNcXFxcV09SS1xcXFxzdGFydGVyLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHRoaWVuLnZvXFxcXERvY3VtZW50c1xcXFxXT1JLXFxcXHN0YXJ0ZXItdWlcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdGhpZW4udm8vRG9jdW1lbnRzL1dPUksvc3RhcnRlci11aS9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cdGJ1aWxkOiB7XHJcblx0XHRsaWI6IHtcclxuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC50cycpLFxyXG5cdFx0XHRuYW1lOiAnQHN0YXJ0ZXItdWkvY29yZScsXHJcblx0XHRcdGZpbGVOYW1lOiBmdW5jdGlvbiAoZm9ybWF0KSB7XHJcblx0XHRcdFx0cmV0dXJuICdpbmRleC4nLmNvbmNhdChmb3JtYXQsICcuanMnKTtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRyb2xsdXBPcHRpb25zOiB7XHJcblx0XHRcdGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxyXG5cdFx0XHRvdXRwdXQ6IHtcclxuXHRcdFx0XHRnbG9iYWxzOiB7XHJcblx0XHRcdFx0XHRyZWFjdDogJ3JlYWN0JyxcclxuXHRcdFx0XHRcdCdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxyXG5cdFx0XHRcdFx0dGFpbHdpbmRjc3M6ICd0YWlsd2luZGNzcycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRzb3VyY2VtYXA6IHRydWUsXHJcblx0XHRlbXB0eU91dERpcjogdHJ1ZSxcclxuXHR9LFxyXG5cdHBsdWdpbnM6IFtyZWFjdCgpLCBkdHMoKV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZXLFNBQVMsb0JBQW9CO0FBQzFZLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLE9BQU87QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLE9BQU8sS0FBSyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUN6QyxNQUFNO0FBQUEsTUFDTixVQUFVLFNBQVUsUUFBUTtBQUMzQixlQUFPLFNBQVMsT0FBTyxRQUFRLEtBQUs7QUFBQSxNQUNyQztBQUFBLElBQ0Q7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUixPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsUUFDZDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDekIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

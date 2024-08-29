import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc';
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        widget: "./src/widget.jsx",
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === "widget"
            ? "assets/js/[name].js"
            : "assets/[name].js";
        },
      },
    },
  },
  experimental: {
    renderBuiltUrl(filename) {
      return "http://localhost:4173/" + filename;
    },
  },
}); 
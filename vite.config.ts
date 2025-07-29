import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: resolve("../lookagem-srv/assets"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "chunk-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.css") {
            return "index.css";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});

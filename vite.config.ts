import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isLibMode = mode === "lib";

  return {
    plugins: [
      react(),
      ...(isLibMode
        ? [
            dts({
              tsconfigPath: "./tsconfig.lib.json",
              rollupTypes: true,
            }),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: isLibMode
      ? {
          // Library build configuration
          lib: {
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "LookagemWeb",
            formats: ["es", "umd"],
            fileName: (format) => `lookagem-web.${format}.js`,
          },
          rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: ["react", "react-dom", "react-router-dom"],
            output: {
              exports: "named",
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react-router-dom": "ReactRouterDOM",
              },
            },
          },
        }
      : {
          // Standard app build configuration
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
  };
});

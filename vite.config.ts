import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        target: "es2020",
        minify: "terser",
        chunkSizeWarningLimit: 500,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
            input: {
                main: resolve(__dirname, "index.html"),
                404: resolve(__dirname, "public/404.html"),
            },
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
});

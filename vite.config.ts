import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-project/",
  // base: process.env.GITHUB_PAGES ? "/vite-project/" : "./",
  build: {
    outDir: "docs",
  },
});
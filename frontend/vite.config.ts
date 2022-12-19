import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    react(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: "src/main.tsx",
    },
    //   lib: {
    //     entry: "src/App.tsx",
    //     name: "AAFeats",
    //     formats: ["es"],
    //     fileName: "aa-feats",
    //   },
  },
  define: {
    process: JSON.stringify({
      env: {
        NODE_ENV: "production",
      },
    }),
  },
});

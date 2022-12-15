import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/App.tsx",
      name: "AAFeats",
      formats: ["es"],
      fileName: "aa-feats",
    },
  },
  define: {
    process: JSON.stringify({
      env: {
        NODE_ENV: "production",
      },
    }),
  },
});

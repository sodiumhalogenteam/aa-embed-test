import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: "prompt" })],
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

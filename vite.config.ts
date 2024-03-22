import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { VitePWA } from "vite-plugin-pwa";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: "autoUpdate" })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@types": resolve(__dirname, "./src/lib/utils/types"),
      "@enums": resolve(__dirname, "./src/lib/utils/enums"),
      "@views": resolve(__dirname, "./src/views"),
      "@router": resolve(__dirname, "./src/router"),
      "@httpclient": resolve(__dirname, "./src/lib/http"),
      "@modules": resolve(__dirname, "./src/modules"),
      "@composables": resolve(__dirname, "./src/composables"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
});

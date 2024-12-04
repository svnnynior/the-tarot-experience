import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test.setup.js",
  },
});

export default mergeConfig(viteConfig, vitestConfig);

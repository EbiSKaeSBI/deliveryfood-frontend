import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dynamicImport()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

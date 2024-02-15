import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env": {
      MODE: process.env.VITE_SOME_KEY,
    },
  },
});

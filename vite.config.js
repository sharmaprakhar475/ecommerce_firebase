import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // if using React

export default defineConfig({
  plugins: [react()],
  base: "/", // VERY IMPORTANT for Vercel
  build: {
    outDir: "dist", // default output folder
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [env({ envDir: ".env" }), react({ base: "/dakim-front-web" })],
});

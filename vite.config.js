import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import daisyui from "daisyui";
// import tailwindConfig from "./tailwind.config.cjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
    // babel({ presets: [reactCompilerPreset()] }),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
  daisyui: {
    themes: ["winter", "dracula"],
  },
});

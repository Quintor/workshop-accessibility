import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // You need to add the pages route and their entry points here
        // Should be like this <a href="/navigatie/toegankelijk/">Toegankelijk</a>
        main: resolve(__dirname, "index.html"),
        "navigatie/niet-toegankelijk": resolve(
          __dirname,
          "navigatie/niet-toegankelijk/index.html",
        ),
        "navigatie/toegankelijk": resolve(
          __dirname,
          "navigatie/toegankelijk/index.html",
        ),
        "blog/niet-toegankelijk": resolve(
          __dirname,
          "blog/niet-toegankelijk/index.html",
        ),
        "blog/toegankelijk": resolve(__dirname, "blog/toegankelijk/index.html"),
        "formulier/niet-toegankelijk": resolve(
          __dirname,
          "formulier/niet-toegankelijk/index.html",
        ),
        "formulier/toegankelijk": resolve(
          __dirname,
          "formulier/toegankelijk/index.html",
        ),
      },
    },
  },
});

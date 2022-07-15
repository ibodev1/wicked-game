module.exports = {
  archive: {
    input: "docs/**",
    output: "build/",
  },
  clean: ["docs/"],
  images: {
    input: "src/images/**/*",
    output: "docs/images",
    watch: "src/images/**/*",
  },
  scripts: {
    input: "src/scripts/app.js",
    output: "docs/js",
    watch: "src/scripts/**/*.js",
  },
  fonts: {
    input: "src/font/**/*",
    output: "docs/font",
    watch: "src/font/**/*",
  },
  songs: {
    input: "src/song/**/*",
    output: "docs/song",
    watch: "src/song/**/*",
  },
  server: {
    root: "docs/",
  },
  styles: {
    input: "src/styles/*.scss",
    output: "docs/css",
    watch: "src/styles/**/*.scss",
  },
  templates: {
    input: "src/templates/*.twig",
    output: "docs/",
    watch: ["src/templates/**/*.twig", "index.json"],
  },
  data: {
    input: ["index.json", "index.txt", "index_tr.txt", "browserconfig.xml"],
    output: "docs/",
    watch: ["index.json", "index.txt", "index_tr.txt", "browserconfig.xml"],
  },
};

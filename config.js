module.exports = {
  archive: {
    input: "dist/**",
    output: "build/",
  },
  clean: ["dist/"],
  images: {
    input: "src/images/**/*",
    output: "dist/images",
    watch: "src/images/**/*",
  },
  scripts: {
    input: "src/scripts/app.js",
    output: "dist/js",
    watch: "src/scripts/**/*.js",
  },
  fonts: {
    input: "src/font/**/*",
    output: "dist/font",
    watch: "src/font/**/*",
  },
  songs: {
    input: "src/song/**/*",
    output: "dist/song",
    watch: "src/song/**/*",
  },
  server: {
    root: "dist/",
  },
  styles: {
    input: "src/styles/*.scss",
    output: "dist/css",
    watch: "src/styles/**/*.scss",
  },
  templates: {
    input: "src/templates/*.twig",
    output: "dist/",
    watch: ["src/templates/**/*.twig", "index.json"],
  },
  data: {
    input: ["index.json", "index.txt", "index_tr.txt", "browserconfig.xml"],
    output: "dist/",
    watch: ["index.json", "index.txt", "index_tr.txt", "browserconfig.xml"],
  },
};

const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const dayjs = require("dayjs");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Build images
  eleventyConfig.addPassthroughCopy("src/img");

  // Build icon
  eleventyConfig.addPassthroughCopy({
    "src/img/favicon": "/",
  });

  eleventyConfig.addWatchTarget("./_tmp/tailwind.css");
  eleventyConfig.addPassthroughCopy({
    "./_tmp/tailwind.css": "./css/tailwind.css",
  });

  // Build JS
  eleventyConfig.addPassthroughCopy("src/js");

  // Add posts collection
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/posts/**/*.md");
  });

  // Add blips collection
  eleventyConfig.addCollection("blips", (collection) => {
    return collection.getFilteredByGlob("./src/blips/*.md");
  });

  // Add blips collection
  eleventyConfig.addCollection("tinkerings", (collection) => {
    return collection.getFilteredByGlob("./src/tinkerings/*.md");
  });

  // Add generated images collection
  eleventyConfig.addCollection("generatedImages", (collection) => {
    return collection.getFilteredByGlob("./src/generated-images/*.md");
  });

  // No clue why this is here
  eleventyConfig.addShortcode("version", function() {
    return String(Date.now());
  });

  /** Formats a date using dayjs's conventions.
   * Docs: https://day.js.org/docs/en/display/format
   */
  const formatDate = (date, format) => dayjs(date).format(format);
  eleventyConfig.addFilter("formatDate", formatDate);

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Minify HTML except it's not working
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
    },
  };
};

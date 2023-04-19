const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Build images
  eleventyConfig.addPassthroughCopy("src/img");

  // Build icon
  eleventyConfig.addPassthroughCopy({ "src/img/favicon": "/" });

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

  // No clue why this is here
  eleventyConfig.addShortcode("version", function() {
    return String(Date.now());
  });

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

const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const remarkFrontMatter = require("remark-frontmatter");
const rehypePrism = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkFrontMatter],
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});

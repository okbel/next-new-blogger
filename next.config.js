const mdxPrism = require("mdx-prism");
const remarkMath = require("remark-math");
const remarkSlug = require("remark-slug");
const rehypeKatex = require("rehype-katex");
const withMdxEnhanced = require("next-mdx-enhanced");
const remarkCodeTitles = require("remark-code-titles");
const remarkHeadings = require("remark-autolink-headings");

module.exports = withMdxEnhanced({
  defaultLayout: true,
  layoutPath: "layouts",
  fileExtensions: ["md", "mdx"],
  rehypePlugins: [rehypeKatex, mdxPrism],
  remarkPlugins: [remarkMath, remarkHeadings, remarkSlug, remarkCodeTitles],
})({
  experimental: {
    modern: true,
  },
});

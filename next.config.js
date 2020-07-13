const remarkMath = require("remark-math");
const remarkSlug = require("remark-slug");
const rehypeKatex = require("rehype-katex");
const rehypePrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");
const remarkCodeTitles = require("remark-code-titles");
const remarkHeadings = require("remark-autolink-headings");

module.exports = withMdxEnhanced({
  defaultLayout: true,
  layoutPath: "components/layouts",
  fileExtensions: ["md", "mdx"],
  rehypePlugins: [rehypeKatex, rehypePrism],
  remarkPlugins: [remarkMath, remarkHeadings, remarkSlug, remarkCodeTitles],
})({
  experimental: {
    modern: true,
  },
});

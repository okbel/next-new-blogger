import Link from "next/link";
import SEO from "@/core/SEO.js";

export default function Wrapper(frontMatter) {
  const slug = frontMatter.__resourcePath
    .replace("posts/", "")
    .replace(".mdx", "");

  return ({ children }) => (
    <>
      <SEO
        url={`https://next-new-blogger.vercel.app/posts/${slug}`}
        {...frontMatter}
      />
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
        <Link href="/">
          <a>Return to Posts</a>
        </Link>
      </header>
      <main>{children}</main>
    </>
  );
}

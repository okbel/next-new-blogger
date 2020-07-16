import Link from "next/link";
import SEO from "@/core/SEO.js";
import Header from "@/components/ui/Header";

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
      <Header>
        <Link href="/">
          <a>Return to Posts</a>
        </Link>
      </Header>
      <main>{children}</main>
    </>
  );
}

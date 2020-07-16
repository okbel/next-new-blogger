import Link from "next/link";
import { frontMatter as postsArr } from "../pages/posts/*.mdx";
import Header from "@/components/ui/Header";

export async function getStaticProps() {
  return {
    props: {
      posts: postsArr,
    },
  };
}

export default function Index({ posts }) {
  return (
    <>
      <Header />
      <main>
        <ul>
          {posts.map((p) => {
            const relativeURL = p.__resourcePath.replace(".mdx", "");
            return (
              <li key={p.relativeURL}>
                <Link href={relativeURL} as={relativeURL}>
                  <a>{p.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

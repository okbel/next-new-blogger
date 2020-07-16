import Link from "next/link";
import { frontMatter as postsArr } from "../pages/posts/*.mdx";

export async function getStaticProps() {
  return {
    props: {
      posts: postsArr,
    },
  };
}

export default function Index({ posts }) {
  return (
    <div>
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
      </header>
      <main>
        <ul>
          {posts.map((p) => {
            const relativeURL = p.__resourcePath.replace(".mdx", "");
            return (
              <li key={p.slug}>
                <Link href={relativeURL} as={relativeURL}>
                  <a>{p.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

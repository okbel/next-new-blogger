import Link from "next/Link";
import { getPosts } from "../lib/helpers.js";

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}

export default function Index({ posts }) {
  if (!posts) {
    return null;
  }

  return (
    <div>
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
      </header>
      <main>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`} as={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

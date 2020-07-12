import Link from "next/Link";
import { frontMatter as blogPosts } from "../pages/posts/**/*";

export default function Index() {
  return (
    <div>
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
      </header>
      <main>
        <ul>
          {blogPosts.map((p) => (
            <li key={p.slug}>
              <Link href={`posts/${p.slug}`} as={`posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

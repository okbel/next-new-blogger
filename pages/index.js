import Link from "next/link";
import { frontMatter as posts } from "../pages/posts/*.mdx";
import Header from "@/components/ui/Header";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <ul>
          {posts.map((p) => {
            const relativeURL = p.__resourcePath.replace(".mdx", "");
            return (
              <li key={`${p.relativeURL}`}>
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

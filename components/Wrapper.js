import Link from "next/Link";

export default function Wrapper({ children }) {
  return (
    <>
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

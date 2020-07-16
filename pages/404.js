import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <header>
        <h1>San Blog</h1>
        <p>science & code</p>
      </header>
      <main>
        <p>Oops, 404 not found</p>
        <Link href="/">
          <a>Return to Posts</a>
        </Link>
      </main>
    </div>
  );
}

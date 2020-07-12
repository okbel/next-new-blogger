import Link from "next/Link";

export default function Index({ posts }) {
  return (
    <div>
      <header>Welcome to my Blog</header>
      <main>
        <ul>
          <li>
            <Link
              href="/posts/student-solves-knot-problem"
              as="/posts/student-solves-knot-problem"
            >
              <a> Graduate Student Solves Decades-Old Conway Knot Problem</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

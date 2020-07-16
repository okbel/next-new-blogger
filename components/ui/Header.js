export default function Header({ children }) {
  return (
    <header>
      <h1>San Blog</h1>
      <p>science & code</p>
      <div>{children}</div>
    </header>
  );
}

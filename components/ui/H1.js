import s from "./H1.module.css";

export default function H1({ children }) {
  return <h1 className={s.root}>{children}</h1>;
}

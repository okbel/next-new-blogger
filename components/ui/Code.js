import Highlight, { defaultProps } from "prism-react-renderer";

export default function Code({ children, className = "" }) {
  const language = className.replace(/language-/, "");
  return <div>{children}</div>;
}

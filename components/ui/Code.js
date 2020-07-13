import Highlight, { defaultProps } from "prism-react-renderer";

export default function Code({ children, ...rest }) {
  return (
    <Highlight {...defaultProps} code={children}>
      {({ className, style, tokens, getLineProps, getTokenProps }) =>
        console.log(tokens) || (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }
    </Highlight>
  );
}

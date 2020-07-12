import Head from "next/Head";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";

import seoConfig from "../config/seo.json";
import Wrapper from "../components/Wrapper.js";
import Code from "../components/Code.js";

const mdxComponents = {
  wrapper: Wrapper,
  code: Code,
};

export default function MyApp({ Component, pageProps, ...rest }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/inter.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
          crossOrigin="anonymous"
        />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

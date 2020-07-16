import "@/styles/prism.css";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import seoConfig from "../siteConfig.json";
import MDXComponents from "@/ui/MDXComponents";

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
        />
      </Head>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

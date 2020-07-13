import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";
import siteConfig from "../../siteConfig.json";

export default function SEO({
  url,
  title,
  description,
  publishedAt = new Date(),
}) {
  const date = new Date(publishedAt).toISOString();
  return (
    <>
      <NextSeo
        title={`${title} – ${siteConfig.title}`}
        canonical={url}
        description={description}
        openGraph={{
          url,
          title,
          description,
          type: "article",
          article: {
            publishedTime: date,
          },
        }}
      />
      <ArticleJsonLd
        authorName={siteConfig.author}
        dateModified={date}
        datePublished={date}
        description={description}
        publisherLogo="/image.png"
        publisherName={siteConfig.author}
        title={title}
        url={url}
      />
    </>
  );
}

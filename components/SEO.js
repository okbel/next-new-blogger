import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

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
        title={`${title} – San Blog`}
        canonical={url}
        description={description}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description,
        }}
      />
      <ArticleJsonLd
        authorName="Bel Curcio"
        dateModified={date}
        datePublished={date}
        description={description}
        publisherLogo="/image.png"
        publisherName="Bel Curcio"
        title={title}
        url={url}
      />
    </>
  );
}

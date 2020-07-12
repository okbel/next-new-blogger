import React from "react";
import { getAllPostsWithContent } from "../lib/helpers";
import siteConfig from "../siteConfig.json";

const blogPostsRssXml = (posts = []) => {
  let latestPostDate = "";
  let rssItemsXml = "";

  posts.map((post) => {
    const postDate = Date.parse(post.data.date);
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.date;
    }
    rssItemsXml += `
      <item>
        <title>${post.data.title}</title>
        <link>
          ${post.data.slug}
        </link>
        <pubDate>${post.data.date}</pubDate>
        <description>
        <![CDATA[${post.content.slice(0, 600)}]]>
        </description>
    </item>`;
  });

  return {
    rssItemsXml,
    latestPostDate,
  };
};

const getRssXml = (posts) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(posts);
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>${siteConfig.title}</title>
        <link>${siteConfig.baseUrl}</link>
        <description>${siteConfig.siteDescription}</description>
        <language>${siteConfig.defaultLang}</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`;
};

export default class Rss extends React.Component {
  static async getInitialProps({ res }) {
    if (!res) {
      return;
    }
    const blogPosts = getRssXml(await getAllPostsWithContent());
    res.setHeader("Content-Type", "text/xml");
    res.write(blogPosts);
    res.end();
  }
}

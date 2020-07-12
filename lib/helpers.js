import fs from "fs";
import { join } from "path";
const matter = require("gray-matter");

const postsDirectory = join(process.cwd(), "pages/posts");

function getPostData(fileName) {
  const postFile = join(postsDirectory, fileName);
  const postFileContent = fs.readFileSync(postFile, "utf8");
  const { data } = matter(postFileContent);
  return { title: "", slug: "", ...data };
}

export async function getPosts() {
  const postFiles = fs.readdirSync(postsDirectory, "utf8");
  return postFiles.map((fileName) => getPostData(fileName));
}

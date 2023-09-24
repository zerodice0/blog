import { cache } from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  title: string;
  body: string;
}

export const fetchMdx = async (fetchPath: string): Promise<Post[]> => {
  const fetched = await fs.readdir(fetchPath);

  const posts = await Promise.all(
    fetched
      .filter((file: string) => path.extname(file) === ".mdx")
      .map(async (file: string) => {
        const filePath = `${fetchPath}/${file}`;

        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return {
          title: data.title,
          slug: data.slug,
          body: content,
        };
      }),
  );

  return posts;
};

export const cacheFetchMdx = cache(
  async (fetchPath: string) => await fetchMdx(fetchPath),
);

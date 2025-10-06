import axios from "axios";

import { IArticle } from "@/interfaces/article.interface";

export async function getNewestArticles(): Promise<IArticle[]> {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKENDLESS_URL}/article?pageSize=6&sortBy=%60created%60%20desc`
    );

    return data;
  } catch (err) {
    throw err;
  }
}

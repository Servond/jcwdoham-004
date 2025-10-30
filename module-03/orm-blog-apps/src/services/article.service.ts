import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

import { createCustomError } from "../utils/customError";

export async function getArticleById(id: number) {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) throw createCustomError(421, "Article not found");

    return article;
  } catch (err) {
    throw err;
  }
}

export async function getAllArticle(
  page: number = 1,
  pageSize: number = 10,
  filter: Prisma.ArticleWhereInput
) {
  try {
    if (filter.title)
      filter.title = {
        contains: filter.title as string,
        mode: "insensitive",
      };

    const articles = await prisma.article.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: filter,
    });

    return articles;
  } catch (err) {
    throw err;
  }
}

export async function createArticle(params: Prisma.ArticleCreateInput) {
  try {
    const article = await prisma.article.create({
      data: params,
    });

    return article;
  } catch (err) {
    throw err;
  }
}

export async function updateArticle(
  id: number,
  params: Prisma.ArticleUpdateInput
) {
  try {
    const article = await prisma.article.update({
      where: { id },
      data: { ...params },
    });

    return article;
  } catch (err) {
    throw err;
  }
}

export async function deleteArticleById(id: number) {
  try {
    const article = await prisma.article.delete({
      where: { id },
    });

    return article;
  } catch (err) {
    throw err;
  }
}

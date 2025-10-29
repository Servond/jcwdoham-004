import pool from "../lib/db";

import { IArticlePayload } from "../interfaces/article.interface";

export async function getAllArticles() {
  try {
    const query = await pool.query("SELECT * FROM article");
    const articles = query.rows;

    return articles;
  } catch (err) {
    throw err;
  }
}

export async function getArticleById() {
  try {
  } catch (err) {
    throw err;
  }
}

async function getArticleByTitle(title: string) {
  try {
    const query = await pool.query("SELECT * FROM article where title = $1", [
      title,
    ]);
    const article = query.rows[0];

    return article;
  } catch (err) {
    throw err;
  }
}

export async function createArticle({
  title,
  description,
  content,
  cover_img,
}: IArticlePayload) {
  try {
    const isExist = await getArticleByTitle(title);

    if (isExist) throw new Error("Article with that title already exist");

    await pool.query(
      "INSERT INTO article (title, description, content, cover_img, slug) values($1, $2, $3, $4, $5)",
      [title, description, content, cover_img, title]
    );
  } catch (err) {
    throw err;
  }
}

export async function updateArticle() {
  try {
  } catch (err) {
    throw err;
  }
}

export async function deleteArticle() {
  try {
  } catch (err) {
    throw err;
  }
}

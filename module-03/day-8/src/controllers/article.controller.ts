import { Request, Response, NextFunction } from "express";

import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../services/article.service";

export async function getAllArticlesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await getAllArticles();

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
}

export async function getArticleByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (err) {
    next(err);
  }
}

export async function createArticleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { title, description, content, cover_img } = req.body;

    await createArticle({ title, description, content, cover_img });

    res.json({
      message: "Create article success",
    });
  } catch (err) {
    next(err);
  }
}

export async function updateArticleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (err) {
    next(err);
  }
}

export async function deleteArticleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  } catch (err) {
    next(err);
  }
}

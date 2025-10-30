import { Request, Response, NextFunction } from "express";

import {
  getAllArticle,
  createArticle,
  getArticleById,
} from "../services/article.service";

export async function getArticleByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.user;
    const { id } = req.params;
    const data = await getArticleById(Number(id));

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
}

export async function getAllArticleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, pageSize, title } = req.query;

    const pageParams = page ? Number(page) : 1;
    const pageSizeParams = pageSize ? Number(pageSize) : 10;

    const data = await getAllArticle(pageParams, pageSizeParams, {
      title: title as string,
    });

    res.json({
      message: "OK",
      data,
    });
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

    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const data = await createArticle({
      title,
      description,
      content,
      cover_img,
      slug,
    });

    res.json({
      message: "OK",
      data,
    });
  } catch (err) {
    next(err);
  }
}

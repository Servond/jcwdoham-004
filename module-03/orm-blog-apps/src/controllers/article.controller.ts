import { Request, Response, NextFunction } from "express";

import {
  getAllArticle,
  createArticle,
  getArticleById,
} from "../services/article.service";
import { Token } from "../middlewares/auth.middleware";

export async function getArticleByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
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
    const user = req.user as Token;
    const { title, description, content } = req.body;
    const image = req.file as Express.Multer.File;

    const slug = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const data = await createArticle(user.email, image, {
      title,
      description,
      content,
      cover_img: image.filename,
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

import { Router } from "express";

import {
  getAllArticlesController,
  getArticleByIdController,
  createArticleController,
  updateArticleController,
  deleteArticleController,
} from "../controllers/article.controller";

const articleRouter = Router();

articleRouter.get("/", getAllArticlesController);
articleRouter.get("/:id", getArticleByIdController);
articleRouter.post("/", createArticleController);
articleRouter.patch("/:id", updateArticleController);
articleRouter.delete("/:id", deleteArticleController);

export default articleRouter;

import { Router } from "express";

import {
  getAllArticleController,
  createArticleController,
  getArticleByIdController,
} from "../controllers/article.controller";

import { authMiddleware, roleGuard } from "../middlewares/auth.middleware";

const articleRouter = Router();

articleRouter.get("/", authMiddleware, getAllArticleController);
articleRouter.get("/:id", getArticleByIdController);
articleRouter.post(
  "/",
  authMiddleware,
  roleGuard(["ADMIN"]),
  createArticleController
);
// articleRouter.patch("/:id");
// articleRouter.delete("/:id");

export default articleRouter;

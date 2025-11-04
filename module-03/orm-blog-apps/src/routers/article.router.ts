import { Router } from "express";

import {
  getAllArticleController,
  createArticleController,
  getArticleByIdController,
} from "../controllers/article.controller";

import { authMiddleware, roleGuard } from "../middlewares/auth.middleware";
import { uploader } from "../utils/uploader";

const articleRouter = Router();

articleRouter.get("/", getAllArticleController);
articleRouter.get("/:id", getArticleByIdController);
articleRouter.post(
  "/",
  authMiddleware,
  roleGuard(["ADMIN"]),
  uploader("memory", "ART", "articles").single("image"),
  createArticleController
);
// articleRouter.patch("/:id");
// articleRouter.delete("/:id");

export default articleRouter;

import { Router } from "express";
import userRouter from "./user.router";
import articleRouter from "./article.router";

const router = Router();

router.use("/users", userRouter); // http://localhost:8080/api/users
router.use("/articles", articleRouter); // http://localhost:8080/api/articles

export default router;

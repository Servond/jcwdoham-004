import { Router } from "express";

import articleRouter from "./article.router";

const router = Router();

router.use("/articles", articleRouter); // http://localhost:8080/api/articles

export default router;

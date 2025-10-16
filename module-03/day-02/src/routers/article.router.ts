import { Router, Request, Response, NextFunction } from "express";

const articles = [
  {
    id: 1,
    title: "Makan Sehat",
    slug: "makan-sehat",
    content: "Makan sehat",
    description: "Makan",
  },
  {
    id: 2,
    title: "Minum Sehat",
    slug: "minum-sehat",
    content: "minum sehat",
    description: "minum",
  },
];

const articleRouter = Router();

// GET http://localhost:8080/api/articles
articleRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      message: "OK",
      data: articles,
    });
  } catch (err) {
    next(err);
  }
});

// GET http://localhost:8080/api/articles/:id
articleRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const article = articles.filter((article) => article.id === Number(id))[0];

    res.json({
      message: "OK",
      data: article,
    });
  } catch (err) {
    next(err);
  }
});

// POST http://localhost:8080/api/articles
articleRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, slug, content, description } = req.body;

    articles.push({
      id: 3,
      title,
      slug,
      content,
      description,
    });

    res.json({
      message: "OK",
      data: articles,
    });
  } catch (err) {
    next(err);
  }
});

export default articleRouter;

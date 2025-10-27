import { Request, Response, Router } from "express";
import { readJson, writeJson } from "../utils/json";

import {
  getAllExpensesController,
  getTotalExpensesController,
} from "../controllers/expense.controller";

interface IExpense {
  id: number;
  title: string;
  type: string;
  category: string;
  nominal: number;
  date: string;
}

interface IExpenses {
  expense: IExpense[];
}

const expenseRouter = Router();

// http:localhost:8080/expenses

// GET http:localhost:8080/expenses?type=Expense&category=Food&title=t
expenseRouter.get("/", getAllExpensesController);

// GET http:localhost:8080/expenses/total
expenseRouter.get("/total", getTotalExpensesController);

// GET http://localhost:8080/expenses/1
expenseRouter.get("/:expenseId", (req: Request, res: Response) => {
  try {
    const { expenseId } = req.params;
    const data = readJson<IExpenses>().expense.filter(
      (i: IExpense) => i.id === Number(expenseId)
    )[0];

    res.json({
      message: "OK",
      data,
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
});

// POST http://localhost:8080/expenses
expenseRouter.post("/", (req: Request, res: Response) => {
  try {
    const { title, type, category, date, nominal } = req.body;

    const data = readJson<IExpenses>();

    data.expense.push({
      id: (data.expense[data.expense.length - 1]?.id || 0) + 1,
      title,
      type,
      category,
      nominal: nominal,
      date: new Date(date).toISOString(),
    });

    writeJson(data);

    res.json({
      message: "OK",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
});

// PATCH http://localhost:8080/expenses/1
expenseRouter.patch("/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, type, category, date, nominal } = req.body;

    const data = readJson<IExpenses>();

    const expenseIndex = data.expense.findIndex((i) => i.id === Number(id));

    if (expenseIndex === -1) throw new Error("Expense not found");

    if (title !== undefined) data.expense[expenseIndex].title = title;
    if (type !== undefined) data.expense[expenseIndex].type = type;
    if (category !== undefined) data.expense[expenseIndex].category = category;
    if (nominal !== undefined) data.expense[expenseIndex].nominal = nominal;
    if (date !== undefined)
      data.expense[expenseIndex].date = new Date(date).toISOString();

    writeJson(data);

    res.json({
      message: "OK",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
});

// DELETE http://localhost:8080/expenses/2
expenseRouter.delete("/:id", (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = readJson<IExpenses>();

    const expenseIndex = data.expense.findIndex((i) => i.id === Number(id));

    if (expenseIndex === -1) throw new Error("Expense not found");

    data.expense.splice(expenseIndex, 1)[0];

    writeJson(data);

    res.json({
      message: "OK",
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
});

export default expenseRouter;

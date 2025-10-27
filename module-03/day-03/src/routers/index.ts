import { Router } from "express";
import expenseRouter from "./expense.router";

const router = Router();

router.use("/expenses", expenseRouter);

export default router;

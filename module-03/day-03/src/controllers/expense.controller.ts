import { Request, Response, NextFunction } from "express";

export function getAllExpensesController(req: Request, res: Response) {
  try {
    const { type, category, title } = req.query;
    const data = readJson<IExpenses>();

    let filteredExpense = data.expense;

    // 1. type filter
    if (type)
      filteredExpense = filteredExpense.filter(
        (i: IExpense) => i.type.toLowerCase() === (type as string).toLowerCase()
      );

    // 2. category filter
    if (category)
      filteredExpense = filteredExpense.filter(
        (i: IExpense) =>
          i.category.toLowerCase() === (category as string).toLowerCase()
      );

    //3. title filter
    if (title)
      filteredExpense = filteredExpense.filter((i: IExpense) =>
        i.title.toLowerCase().includes((title as string).toLowerCase())
      );

    res.json({
      message: "OK",
      data: filteredExpense,
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
}

export function getTotalExpensesController(req: Request, res: Response) {
  try {
    // ambil dari url request ?category=transport&dateFrom=2025-01-01&dateTo=2025-10-16
    const { dateFrom, dateTo, category } = req.query;

    const data = readJson<IExpenses>();

    let filteredExpenses = data.expense;

    // jika dateFrom dan dateTo tidak kosong
    if (dateFrom && dateTo) {
      // ambil millisecond
      const from = new Date(dateFrom as string).getTime();
      const to = new Date(dateTo as string).getTime();

      // filter data expenses yang dimana tanggalnya diantara dateFrom dan dateTo query
      filteredExpenses = filteredExpenses.filter((i: IExpense) => {
        const expenseDate = new Date(i.date).getTime();
        return expenseDate >= from && expenseDate <= to;
      });
    }

    // jika category tidak kosong
    if (category) {
      // filter data expenses yang dimana category sesuai dengan category query
      filteredExpenses = filteredExpenses.filter(
        (i: IExpense) =>
          i.category.toLowerCase() === (category as string).toLowerCase()
      );
    }

    // hitung total semua nominal dari array expenses
    // 1. total income
    const total_income = filteredExpenses
      .filter((i: IExpense) => i.type === "Income")
      .reduce((sum, expense) => sum + expense.nominal, 0);

    // 2. total expense
    const total_expense = filteredExpenses
      .filter((i: IExpense) => i.type === "Expense")
      .reduce((sum, expense) => sum + expense.nominal, 0);

    // 3. total balance (income - expense)
    const balance = total_income - total_expense;

    res.json({
      message: "OK",
      data: {
        total_income: total_income,
        total_expense: total_expense,
        balance: balance,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
}

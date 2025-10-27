import express, { Request, Response } from "express";
import cors from "cors";

import pool from "./lib/db";
import router from "./routers";
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router); // http:localhost:8080/api

app.get("/", async (req: Request, res: Response) => {
  const result = await pool.query("SELECT * FROM tracker");
  const data = result.rows;
  res.json({
    message: "OK",
    data,
  });
});

// http://localhost:8080/1;delete from tracker;
app.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const result = await pool.query("SELECT * FROM tracker where id = $1", [id]);
  const data = result.rows;
  res.json({
    message: "OK",
    data,
  });
});

pool.connect((err, client, release) => {
  if (err) return console.error("Error acquiring client", err.stack);

  console.log("Database connected successfully");

  release();
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

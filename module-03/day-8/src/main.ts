import express from "express";
import cors from "cors";
import helmet from "helmet";

import pool from "./lib/db";
import router from "./routers";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router); // http:localhost:8080/api

// Error handling middleware

// Check database connection
pool.connect((err, client, release) => {
  if (err) return console.error("Database failed to connect", err.stack);

  console.log("Database connected successfully");

  release();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

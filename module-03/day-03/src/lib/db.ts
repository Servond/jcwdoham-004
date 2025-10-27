import { Pool } from "pg";

const pool = new Pool({
  host: "aws-1-us-east-2.pooler.supabase.com",
  database: "expense_tracker",
  user: "postgres.pepemsaatxwasayhxwpk",
  password: "dIazRTMHBmEd4e7g",
  port: 5432,
});

export default pool;

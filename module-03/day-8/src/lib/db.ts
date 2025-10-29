import { Pool } from "pg";

const pool = new Pool({
  host: "aws-1-us-east-2.pooler.supabase.com",
  database: "postgres",
  user: "postgres.pepemsaatxwasayhxwpk",
  password: "ly9PDiDnH9g1JGxO",
  port: 6543,
  options: "-c search_path=blog_apps, public",
});

export default pool;

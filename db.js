import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "booknotes",
  password: "Password123",
  port: 5432,
});

// Connect with error handling
try {
  await db.connect();
  console.log("DB Connected");
} catch (err) {
  console.error("DB Connection Error:", err);
}

export default db;
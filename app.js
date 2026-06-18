import express from "express";
import bodyParser from "body-parser";
import booksRouter from "./routes/books.js";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/", booksRouter);

// Global error handler (IMPORTANT)
app.use((err, req, res, next) => {
  console.error("Global Error:", err.message);

  res.status(500).send("Something went wrong!");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
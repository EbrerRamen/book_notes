import express from "express";
import db from "../db.js";
import axios from "axios";

const router = express.Router();

// Get all books
router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM books ORDER BY id DESC");
    res.render("index.ejs", { books: result.rows });
  } catch (err) {
    next(err); // send to global error handler
  }
});

// Add book form
router.get("/add", (req, res) => {
  res.render("add.ejs");
});

// Create book
router.post("/add", async (req, res, next) => {
  const { title, author, isbn, notes, rating } = req.body;

  try {
    await db.query(
      "INSERT INTO books (title, author, isbn, notes, rating) VALUES ($1, $2, $3, $4, $5)",
      [title, author, isbn, notes, rating]
    );
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

// Edit form
router.get("/edit/:id", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM books WHERE id=$1", [
      req.params.id,
    ]);

    res.render("edit.ejs", { book: result.rows[0] });
  } catch (err) {
    next(err);
  }
});

// Update book
router.post("/edit/:id", async (req, res, next) => {
  const { title, author, isbn, notes, rating } = req.body;

  try {
    await db.query(
      "UPDATE books SET title=$1, author=$2, isbn=$3, notes=$4, rating=$5 WHERE id=$6",
      [title, author, isbn, notes, rating, req.params.id]
    );

    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

// Delete book
router.post("/delete/:id", async (req, res, next) => {
  try {
    await db.query("DELETE FROM books WHERE id=$1", [req.params.id]);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

export default router;
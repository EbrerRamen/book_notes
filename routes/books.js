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
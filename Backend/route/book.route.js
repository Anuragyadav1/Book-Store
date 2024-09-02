import express from "express";
import { getBook, addBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/get", getBook);
router.post("/add", addBook);

export default router;

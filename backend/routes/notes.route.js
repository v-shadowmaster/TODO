const express = require("express");
const {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
} = require("../controllers/notes.controller");

const router = express.Router();
router.post("/", createNote);

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.delete("/:id", deleteNote);

module.exports = router;

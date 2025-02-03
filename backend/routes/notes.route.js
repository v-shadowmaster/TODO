const express = require("express");
const {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} = require("../controllers/notes.controller");

const router = express.Router();
router.post("/", createNote);

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.delete("/:id", deleteNote);

router.put("/:id", updateNote);

module.exports = router;

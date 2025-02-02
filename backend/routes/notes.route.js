const express = require("express");
const notesModel = require("../models/notes.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = notesModel.create({
      title,
      content,
    });

    await newNote.save();

    res.status(500).json(newNote);
  } catch (err) {}
});

module.exports = router;

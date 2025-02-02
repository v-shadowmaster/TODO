const notes = require("../models/notes.model");

exports.createNote = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const newNote = await notes.create({
      title,
      content,
      user,
    });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a note" });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const note = await notes.find();
    res.status(200).json(note); // Corrected from notes to note
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the notes" });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the note" });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await notes.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the note" });
  }
};

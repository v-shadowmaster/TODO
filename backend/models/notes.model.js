const { Schema, model } = require("mongoose");

const notes = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const notesModel = model("notes", notes);
module.exports = notesModel;

import axios from "axios";
import React, { useState } from "react";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/notes/${id}`);
      if (res.status === 200) {
        console.log("Note deleted:", res.data);
        // Update the state to remove the deleted note
        setNotes(notes.filter((note) => note._id !== id));
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleDelete = (id) => {
    deleteNote(id);
  };

  // Fetch notes when the component mounts
  React.useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;

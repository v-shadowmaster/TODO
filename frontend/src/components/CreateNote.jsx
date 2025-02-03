import React, { useState } from "react";
import axios from "axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/notes", {
        title: title,
        content: content,
      });
      setTitle("");
      setContent("");
      alert("note created successfully");
      app;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center align-center ">
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNote;

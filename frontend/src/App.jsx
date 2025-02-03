import React from "react";
import Login from "./components/Login";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
function App() {
  return (
    <div>
      <CreateNote />
      <NotesList />
    </div>
  );
}

export default App;

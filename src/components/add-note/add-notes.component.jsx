import React, { useState } from "react";
import "./add-notes.styles.scss";
const AddNotes = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewNote(newNote);
    setNewNote("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-notes">
      <textarea
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNotes;

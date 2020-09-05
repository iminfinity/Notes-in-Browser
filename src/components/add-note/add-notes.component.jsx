import React, { useState } from "react";

const AddNotes = ({ addNewNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewNote(newNote);
    setNewNote("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNotes;

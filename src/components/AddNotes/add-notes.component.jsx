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
      <input
        type="text"
        value={newNote}
        onChange={(event) => setNewNote(event.target.value)}
      />
    </form>
  );
};

export default AddNotes;

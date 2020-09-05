import React, { useReducer, useEffect } from "react";
import "./App.css";

import { ACTIONS, notesReducer, getNotes } from "./notesReducer";

import Notes from "./components/notes/notes.component";
import AddNodes from "./components/add-note/add-notes.component";
import Header from "./components/header/header.component";
function App() {
  const [notes, dispatch] = useReducer(notesReducer, getNotes());
  const addNewNote = (newNote) => {
    dispatch({ type: ACTIONS.ADD_NEW_NOTE, payload: newNote });
  };
  const removeNote = (deleteIndex) => {
    dispatch({ type: ACTIONS.DELETE_NOTE, payload: deleteIndex });
  };
  useEffect(() => {
    const localNotes = JSON.stringify(notes);
    localStorage.setItem("notes", localNotes);
  }, [notes]);
  return (
    <>
      <Header />
      <div className="App">
        <Notes notes={notes} removeNote={removeNote} />
        <AddNodes addNewNote={addNewNote} />
      </div>
    </>
  );
}

export default App;

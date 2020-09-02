import React from "react";
import "./App.css";

import Notes from "./components/Notes/notes.component";
import AddNodes from "./components/AddNotes/add-notes.component";
function App() {
  return (
    <div className="App">
      <Notes />
      <AddNodes />
    </div>
  );
}

export default App;

import React from "react";
import Note from "../note/note.component";
import "./notes.styles.scss";

const Notes = ({ notes, removeNote }) => {
  const deleteThis = (index) => {
    removeNote(index);
  };
  return (
    <div className="notes">
      {notes
        ? notes.map((note, index) => {
            return (
              <Note
                key={index}
                index={index}
                note={note}
                deleteThis={deleteThis}
              />
            );
          })
        : null}
    </div>
  );
};

export default Notes;

import React from "react";

const Notes = ({ notes, removeNote }) => {
  const deleteThis = (index) => {
    removeNote(index);
  };
  return (
    <div>
      <h1>Notes</h1>
      {notes
        ? notes.map((note, index) => {
            return (
              <p key={index}>
                {index} {note}
                <button onClick={() => deleteThis(index)}>Delete</button>
              </p>
            );
          })
        : null}
    </div>
  );
};

export default Notes;

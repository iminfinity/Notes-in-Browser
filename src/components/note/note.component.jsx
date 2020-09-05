import React, { useRef, useEffect, useState } from "react";

import "./note.styles.scss";

const Note = ({ index, note, deleteThis }) => {
  const [height, setHeight] = useState("initial");
  const noteRef = useRef();
  useEffect(() => {
    const noteHeight = noteRef.current.getBoundingClientRect().height;
    setHeight(noteHeight);
  }, []);
  return (
    <div ref={noteRef} className="note" style={{ height: height }}>
      {note}
      <button onClick={() => deleteThis(index)}>Delete</button>
    </div>
  );
};
export default Note;

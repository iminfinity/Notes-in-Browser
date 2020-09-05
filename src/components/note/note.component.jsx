import React, { useRef, useEffect, useState } from "react";

import "./note.styles.scss";

const Note = ({ index, note, deleteThis }) => {
  const [height, setHeight] = useState("initial");
  const [width, setWidth] = useState("initial");
  const noteRef = useRef();
  useEffect(() => {
    const noteHeight = noteRef.current.getBoundingClientRect().height;
    const noteWidth = noteRef.current.getBoundingClientRect().width;
    setHeight(noteHeight);
    setWidth(noteWidth);
  }, []);
  return (
    <div
      ref={noteRef}
      className="note"
      style={{ height: height, width: width }}
    >
      {note}
      <button onClick={() => deleteThis(index)}>&#10006;</button>
    </div>
  );
};
export default Note;

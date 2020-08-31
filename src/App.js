import React, { useMemo, useState } from "react";

import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import "./App.css";

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

function App() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <div className="App">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable
          onKeyDown={(event) => {
            if (event.key === "&") {
              event.preventDefault();
              editor.insertText("and");
            }
            console.log(editor);
            console.log(editor.children[0].children[0].text);
          }}
        />
      </Slate>
    </div>
  );
}

export default App;

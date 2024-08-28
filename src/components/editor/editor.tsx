import Quill from "quill";
import { FormEvent, forwardRef, useEffect, useRef, useState } from "react";
import "./editor.css";
import "quill/dist/quill.core.css";

function Editor() {
  const [state, setState] = useState();
  const toolbar = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => {
      if (editorRef.current) {
        const quill = new Quill(editorRef.current, {
          theme: "snow"
        });
        quill.insertText(0, "Inserted first text\n\n");
        // console.log("content => ", quill.getContents())
        // editorRef.current = quill;
        quill.on(Quill.events.TEXT_CHANGE, () => {
          console.log("contents => ", quill.getContents());
        })
      }
    },
    [editorRef.current]
  )

  function handleTyping(event: FormEvent) {
    console.log("event fired?");
  }

  return(
    <>
      <div id="toolbar" ref={toolbar}></div>
      <div id="editor" ref={editorRef} onChange={handleTyping}></div>
      <button onClick={handleTyping}>Get Contents</button>
    </>
  )
}

const EditorComponent = forwardRef(Editor);
export default EditorComponent;

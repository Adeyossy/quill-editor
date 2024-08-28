import Quill from "quill";
import { forwardRef, useEffect, useRef, useState } from "react";
import "./editor.css"

function Editor() {
  const [state, setState] = useState();
  const editorRef = useRef<HTMLDivElement | null>(null);
  useEffect(
    () => {
      if (editorRef.current) {
        const quill = new Quill(editorRef.current, {
          modules: { toolbar: true }
        });
        quill.insertText(0, "Inserted first text\n\n")
        // editorRef.current = quill;
      }
    },
    [editorRef.current]
  )

  return(
    <div id="editor" ref={editorRef}></div>
  )
}

const EditorComponent = forwardRef(Editor);
export default EditorComponent;

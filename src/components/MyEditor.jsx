import React from "react"
import '../css/App.css'
import PropertyEditor from "./PropertyEditor";
import TextEditor from "./TextEditor";


export default function MyEditor({updateNote, editorState, setEditorState}) {
    const textEditorProps = {editorState, setEditorState, updateNote}
    return (
        <div className='Editor'>
            <PropertyEditor />
            <TextEditor {...textEditorProps} />
        </div>
    )
}

import React, {useState}from "react"
import '../App.css'
import PropertyEditor from "./PropertyEditor";
import TextEditor from "./TextEditor";


export default function Editor({currentNoteID, notes, updateNote}) {
    const [textContent, setTextContent] = useState(notes.find(note => note.id === currentNoteID).body)

    const textEditorProps = {textContent, setTextContent, updateNote}
    return (
        <div className='Editor'>
            <PropertyEditor />
            <TextEditor {...textEditorProps} />
        </div>
    )
}

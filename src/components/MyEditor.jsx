import React from "react"
import PropertyEditor from "./PropertyEditor";
import TextEditor from "./TextEditor";


export default function MyEditor({updateNote, editorState, setEditorState, noteType, setNoteType}) {
    const propertyEditorProps = {noteType, setNoteType, setEditorState, editorState}
    const textEditorProps = {editorState, setEditorState, updateNote}
    return (
        <div className='Editor'>
            <PropertyEditor {...propertyEditorProps}/>
            <TextEditor {...textEditorProps} />
        </div>
    )
}

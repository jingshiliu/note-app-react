import React from 'react'
import {Editor} from 'draft-js'
import '../css/Draft.css';

export default function TextEditor({editorState, setEditorState, updateNote}){

    return (
        <Editor
            editorState={editorState}
            onChange={function (editorState){
                setEditorState(editorState)
                updateNote()
            }}
        />
    )
}
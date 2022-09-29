import React from 'react'
import {Editor, RichUtils} from 'draft-js'
import '../css/Draft.css';

export default function TextEditor({editorState, setEditorState, updateNote}){

    return (
        <Editor
            editorState={editorState}
            onChange={function (editorState){
                console.log(editorState);
                setEditorState(editorState)
                updateNote()
            }}
        />
    )
}
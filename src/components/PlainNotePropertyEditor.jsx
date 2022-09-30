import React from "react";
import {RichUtils} from "draft-js";

export default function PlainNotePropertyEditor({setEditorState, editorState}){

    function bold(){
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
    }

    function italic(){
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }

    function underline(){
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }

    function code(){
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'))
    }
    return(
        <div className='PlainNotePropertyEditor'>
            <button className='property-editor-button' onClick={bold}>Bold</button>
            <button className='property-editor-button' onClick={italic}>Italic</button>
            <button className='property-editor-button' onClick={underline}>Underline</button>
            <button className='property-editor-button' onClick={code}>Code</button>
        </div>
    )
}
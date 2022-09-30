import React from "react";

export default function NoteTypeToggler({noteType, setNoteType}){
    let plainNoteButton, markdownButton

    if(noteType === 'plain-note'){
        plainNoteButton = <button className='note-type-button note-type-button-selected' onClick={()=>setNoteType('plain-note')}>Plain Note</button>
        markdownButton = <button className='note-type-button' onClick={()=>setNoteType('markdown')}>Markdown</button>
    } else{
        plainNoteButton = <button className='note-type-button' onClick={()=>setNoteType('plain-note')}>Plain Note</button>
        markdownButton = <button className='note-type-button note-type-button-selected' onClick={()=>setNoteType('markdown')}>Markdown</button>
    }
    return (
        <div className='NoteTypeToggler'>
            {plainNoteButton}
            {markdownButton}
        </div>
    )
}
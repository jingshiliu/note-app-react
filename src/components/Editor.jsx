import React from "react"
import '../App.css'

export default function Editor({currentNoteID, notes, updateNote}) {

    return (
        <div className='Editor'>
            <input onChange={()=>{
                        updateNote(document.querySelector('.Editor input').value)
                    }}
                   className='editor-body form-control'
                   type="text"
                   value={notes.find(note => note.id === currentNoteID).body}
            />

        </div>
    )
}

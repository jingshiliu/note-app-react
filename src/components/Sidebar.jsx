import React from "react"

export default function Sidebar({notes, createNote}) {
    let count = 0;
    return(
        <div className='Sidebar'>
            {
                notes.map(note => {
                    return <div key={note.id}>Note {count++}</div>
                })
            }

        </div>
    )
}

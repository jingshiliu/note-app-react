import React from "react"
import './SidebarPreview'
import SidebarPreview from "./SidebarPreview";

export default function Sidebar({notes, createNote, setCurrentNoteID, currentNoteID}) {
    let count = 1;
    return(
        <div className='Sidebar'>
            <span id='app-name'>Note App</span>
            <button className='sidebar-button new-note-button' onClick={createNote}>New Note + </button>
            {
                notes.map(note => {
                    return <SidebarPreview setCurrentNoteID={setCurrentNoteID}
                                           currentNoteID={currentNoteID}
                                           innerText={`Note ${count++}`}
                                           noteID={note.id}
                                           key={note.id} />
                })
            }
        </div>
    )
}

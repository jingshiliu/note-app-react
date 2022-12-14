import React from "react";

export default function SidebarPreview({setCurrentNoteID, innerText, noteID, currentNoteID, changeNoteInEditor}) {

    let sidebarPreview;
    if (noteID === currentNoteID) {
        sidebarPreview = <div className='SidebarPreview sidebar-button sidebar-button-selected'
                              onClick={() => {
                                  setCurrentNoteID(noteID)
                                  changeNoteInEditor(noteID)
                              }}>
                            <span>{innerText}</span>
                         </div>
    } else {
        sidebarPreview = <div className='SidebarPreview sidebar-button'
                              onClick={() => {
                                  setCurrentNoteID(noteID)
                                  changeNoteInEditor(noteID)
                              }}>
                            <span>{innerText}</span>
                        </div>
    }
    return (
        sidebarPreview
    )
}
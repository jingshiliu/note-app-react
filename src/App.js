import React, {useState} from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import {nanoid} from "nanoid"
import {data, saveDataToLocalStorage} from "./data";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


export default function App() {
    const [notes, setNotes] = useState(data)
    const [currentNoteID, setCurrentNoteID] = useState(notes[0].id)

    function updateNote(text) {
        setNotes(notes.map(note => {
            if (note.id === currentNoteID)
                return {...note, body: text}
            return note
        }))
        saveDataToLocalStorage(notes)
    }

    function createNote() {
        let newNote = {
            id: nanoid(),
            body: 'Write notes here...'
        }
        let newNotes = [...notes, newNote]
        setNotes(newNotes)
        setCurrentNoteID(newNote.id)
        saveDataToLocalStorage(newNotes)
    }

    const editorProps = {currentNoteID, notes, updateNote}
    const sidebarProps = {createNote, notes, setCurrentNoteID, currentNoteID}

    return (
        <div className='App'>
            <Sidebar {...sidebarProps}/>
            <Editor {...editorProps}/>
        </div>
    )
}

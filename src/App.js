import React, {useState} from "react"
import Sidebar from "./components/Sidebar"
import MyEditor from "./components/MyEditor"
import {nanoid} from "nanoid"
import {data, saveDataToLocalStorage} from "./data";
import 'bootstrap/dist/css/bootstrap.min.css'
import {EditorState, convertToRaw} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import {draftToMarkdown, markdownToDraft} from "markdown-draft-js";
import './css/Draft.css';
import './css/App.css'


export default function App() {
    const [notes, setNotes] = useState(data)
    const [currentNoteID, setCurrentNoteID] = useState(notes[0].id)
    const [editorState, setEditorState] = useState(EditorState.createWithText(notes.find(note => note.id === currentNoteID).body))


    function updateNote() {
        const markdownString = draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
        setNotes(notes.map(note => {
            if (note.id === currentNoteID)
                return {...note, body: markdownString}
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
        setEditorState(EditorState.createWithText(newNote.body))
        saveDataToLocalStorage(newNotes)
    }

    function changeNoteInEditor(noteID){
        setEditorState(EditorState.createWithText(notes.find(note => note.id === noteID).body))
    }

    const editorProps = {currentNoteID, notes, updateNote, editorState, setEditorState}
    const sidebarProps = {createNote, notes, setCurrentNoteID, currentNoteID, changeNoteInEditor}

    return (
        <div className='App'>
            <Sidebar {...sidebarProps}/>
            <MyEditor {...editorProps}/>
        </div>
    )
}

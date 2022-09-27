import React, {useState} from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import {nanoid} from "nanoid"
import {data, saveDataToLocalStorage} from "./data";
import './App.css'


export default function App() {
    const [notes, setNotes] = useState(data)
    const [currentNote, setCurrentNote] = useState()

    function updateNote(){

    }

    function createNote(newNote){
        setNotes({...notes, })
    }

    return (
        <div className='App'>
            <Sidebar />
            <Editor />
        </div>
    )
}

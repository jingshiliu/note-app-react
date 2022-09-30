import React from 'react';
import NoteTypeToggler from "./NoteTypeToggler";
import PlainNotePropertyEditor from "./PlainNotePropertyEditor";

export default function PropertyEditor({noteType, setNoteType, setEditorState, editorState}){
    const noteTypeTogglerProps = {noteType, setNoteType}
    const plainNotePropertyEditorProps = {setEditorState, editorState}

    let propertyEditor;
    if(noteType === 'plain-note')
        propertyEditor = <PlainNotePropertyEditor {...plainNotePropertyEditorProps}/>


    return (
        <div className='PropertyEditor'>
            <NoteTypeToggler {...noteTypeTogglerProps} />
            {propertyEditor}
        </div>
    )
}
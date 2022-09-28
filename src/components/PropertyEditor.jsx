import React, {useState} from 'react';

export default function PropertyEditor(){
    const [selection, setSelection] = useState( 'plain-note');

    let plainNoteButton
    let markdownButton
    if(selection === 'plain-note'){
        plainNoteButton = <button className='note-type-button note-type-button-selected' onClick={()=>setSelection('plain-note')}>Plain Note</button>
        markdownButton = <button className='note-type-button' onClick={()=>setSelection('markdown')}>Markdown</button>
    } else{
        plainNoteButton = <button className='note-type-button' onClick={()=>setSelection('plain-note')}>Plain Note</button>
        markdownButton = <button className='note-type-button note-type-button-selected' onClick={()=>setSelection('markdown')}>Markdown</button>
    }

    return (
        <div className='PropertyEditor'>
            <div className='note-type-buttons-container'>
                {plainNoteButton}
                {markdownButton}
            </div>
        </div>
    )
}
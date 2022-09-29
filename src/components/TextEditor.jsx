import React, {useRef, useState} from 'react'
import ContentEditable from "react-contenteditable";

export default function TextEditor({textContent, setTextContent, updateNote}){
    // return (
    //     <div className='TextEditor form-control'
    //          onInput={e => {
    //              setTextContent(e.target.innerText)
    //              updateNote(e.target.innerText)
    //          }}
    //          contentEditable={true}>
    //         {textContent}
    //     </div>
    // )
    const ref = useRef(textContent)

    return (
        <ContentEditable
            className='TextEditor form-control'
            innerRef={ref}
            html={textContent} // innerHTML of the editable div
            disabled={false}       // use true to disable editing
            onChange={e =>{
                setTextContent(e.target.value)
                updateNote(e.target.value)
            }} // handle innerHTML change
        />
    )
}
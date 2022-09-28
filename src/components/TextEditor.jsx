import React from 'react'

export default function TextEditor({textContent, setTextContent, updateNote}){
    return (
        <div className='TextEditor form-control'
             onInput={e => {
                 setTextContent(e.target.innerText)
                 updateNote(e.target.innerText)
             }}
             contentEditable={true}>
            {textContent}
        </div>
    )
}
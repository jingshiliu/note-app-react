import React from 'react'

export default function TextEditor({textContent, setTextContent, updateNote}){
    return (
        <div className='form-control TextEditor'
             onInput={e => {
                 setTextContent(e.target.innerText)
                 updateNote(e.target.innerText)
             }}
             contentEditable={true}>
            {textContent}
        </div>
    )
}
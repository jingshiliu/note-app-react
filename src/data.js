const data  = JSON.parse(localStorage.getItem('notesData')) || [
    {
        id: 0,
        body: "Enter note here"
    },
]

const saveDataToLocalStorage = (notes)=>{
    localStorage.setItem('notesData', JSON.stringify(notes))
}

export {data, saveDataToLocalStorage};
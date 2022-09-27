const data  = JSON.parse(localStorage.getItem('notesData')) || [
    {
        id: 0,
        body: "Enter text here"
    },
]

const saveDataToLocalStorage = ()=>{
    localStorage.setItem('notesData', JSON.stringify(data))
}

export {data, saveDataToLocalStorage};
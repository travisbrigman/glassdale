import { saveNote } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteName = document.querySelector("#note-author")
        const noteTitle = document.querySelector("#note-title")
        const noteContent = document.querySelector("#note-text")

        // Make a new object representation of a note
        const newNote = {
            name: noteName.value,
            title: noteTitle.value,
            text: noteContent.value,
            timeStamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


const render = () => {
    contentTarget.innerHTML = `
    <section class="noteForm">
        <h3>Name: <input type="name" id="note-author"></h3>
        <h3>Note Title: <input type="title" id="note-title"></h3>
        <h3>Note Text:<input type="text" id="note-text"></h3>

        <button id="saveNote">Save Note</button>
    </section>
    `
}

export const NoteForm = () => {
    render()
}
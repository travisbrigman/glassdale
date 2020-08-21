import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")


// Handle browser-generated click event in component

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
        const noteName = document.querySelector("#note-author")
        const noteTitle = document.querySelector("#note-title")
        const noteContent = document.querySelector("#note-text")
        const noteCriminal = document.querySelector("#noteForm--criminal")
        
       const criminalId = parseInt(noteCriminal.value)

       if (criminalId !== 0) {
           const newNote = {
               name: noteName.value,
               title: noteTitle.value,
               text: noteContent.value,
               timeStamp: Date.now(),
               criminalId: parseInt(criminalId)
           }
           
           // Change API state and application state
           saveNote(newNote)
       } else {
           window.alert("choose a criminal")
       }

    }
    if (clickEvent.target.id === "editNote") {
        
    }
})

const render = (criminalCollection) => {
    contentTarget.innerHTML = `
    <section class="noteForm">
        <h3>Name: <input type="name" id="note-author"></h3>
        <h3>Note Title: <input type="title" id="note-title"></h3>
        <h3>Note Text:<input type="text" id="note-text"></h3>
        <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Select a criminal...</option>
        ${
            criminalCollection.map(
                criminal => {
                   return `<option value="${ criminal.id }">${ criminal.name }</option>`

                }
            )
        }
    </select>
    
    <button id="saveNote">Save Note</button>
    </section>
    `
}

export const NoteForm = () => {
    getCriminals().then(() => {
        const criminalsArray = useCriminals()
        render(criminalsArray)
    })
}




eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "criminalSelect") {
        // Get the name of the selected criminal
        
        const selectedCriminal = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("criminalSelected", {
            detail: {
                criminal: selectedCriminal
            }
        })
  
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
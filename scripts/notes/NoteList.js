import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"

const contentTarget = document.querySelector(".notesListContainer") 
const eventHub = document.querySelector(".container")


eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})

const render = noteArray => {
    const allNotesConvertedToStrings = noteArray.map(
        currentNote => {
            return NoteHTMLConverter(currentNote)
        }
        ).join("")
        
        contentTarget.innerHTML = allNotesConvertedToStrings
    }
      
    export const NoteList = () => {
        getNotes()
        .then(useNotes)
        .then(render)
    }  
    
    eventHub.addEventListener("showNotesClicked", NoteList)
    eventHub.addEventListener("showNotesClicked", () => {
        const newNotes = useNotes()
        render(newNotes)
        })
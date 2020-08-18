import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"
import { useCriminals } from '../criminals/CriminalProvider.js'

const contentTarget = document.querySelector(".notesListContainer") 
const eventHub = document.querySelector(".container")


export const NoteList = () => {
    getNotes()
    .then(() => {
        const notes = useNotes()
        
        render(notes)
    })
}

const render = (noteCollection) => {
    
    const criminals = useCriminals()
    
    contentTarget.innerHTML = noteCollection.reverse().map(note => {
        // Find the related criminal      
        const relatedCriminal = criminals.find(criminal => criminal.id === note.criminalId)
        return NoteHTMLConverter(note, relatedCriminal)
    }).join("")
    }

    eventHub.addEventListener("showNotesClicked", NoteList)
    eventHub.addEventListener("noteStateChanged", () => {
        const newNotes = useNotes()
        render(newNotes)
        })

        eventHub.addEventListener("click", clickEvent => {
            if (clickEvent.target.id.startsWith("deleteNote--")) {
                const [prefix, id] = clickEvent.target.id.split("--")

               deleteNote(id).then(
                   () => {
                       const updatedNotes = useNotes()
                       const criminals = useCriminals()
                       render(updatedNotes, criminals)
                   }
               )
            }
        })

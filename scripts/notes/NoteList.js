import { getNotes, useNotes } from "./NoteDataProvider.js"
import { NoteHTMLConverter } from "./NoteHTMLConverter.js"
const contentTarget = document.querySelector(".notesListContainer") //<----Not yet declared anywhere

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        currentNote => {
            return NoteHTMLConverter(currentNote)
        }
    )

    contentTarget.innerHTML = allNotesConvertedToStrings
}


export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}
import { useCriminals } from "../criminals/CriminalProvider.js"
import { alibisHTMLConverter } from "./AlibisHTML.js"

const contentTarget = document.querySelector(".alibisContainer") 
const eventHub = document.querySelector(".container")

export const render = alibiArray => {
    alibiArray.forEach(alibiObject => {
        contentTarget.innerHTML += alibisHTMLConverter(alibiObject)
    });
    
    //use dialog box dialog.showModal or dialog.close
}

const modalDialog = () => { 
    document.getElementById("alibiDialog").showModal();
}
          
    eventHub.addEventListener("alibisButtonClicked", () => {
        const criminalMatchUp = event.detail.criminalId
        const criminalsArray = useCriminals()
        
        const matchedCriminal = criminalsArray.find(
            criminal => {
                return parseInt(criminalMatchUp) === criminal.id
            }
        )

        const knownAssociates = matchedCriminal.known_associates.map(
            alibis => {
                return alibis
            }
        )

        render(knownAssociates)
        console.table(knownAssociates)
        modalDialog()
        })


    
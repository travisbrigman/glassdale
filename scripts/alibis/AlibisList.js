import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".alibisListContainer") 
const eventHub = document.querySelector(".container")

export const render = alibiArray => {
    console.log(alibiArray)
    //use dialog box dialog.showModal or dialog.close
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
        })


    
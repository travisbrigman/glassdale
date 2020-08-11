import { useCriminals } from "../criminals/CriminalProvider.js"
import { alibisHTMLConverter } from "./AlibisHTML.js"

const contentTarget = document.querySelector(".alibisContainer") 
const eventHub = document.querySelector(".container")

export const render = alibiArray => {
    let allAlibis = ""

    alibiArray.forEach(alibiObject => {
        allAlibis += alibisHTMLConverter(alibiObject)
    });   
    contentTarget.innerHTML = `<dialog id="alibiDialog">${ allAlibis }</dialog>`
}

const showModalDialog = () => { 
    document.getElementById("alibiDialog").showModal();
}

eventHub.addEventListener("alibisButtonClicked", () => {
    const criminalMatchUp = event.detail.criminalId
    const criminalsArray = useCriminals()
    
    const matchedCriminal = criminalsArray.find(
        criminal => {
            return parseInt(criminalMatchUp) === criminal.id
        })
        
        const knownAssociates = matchedCriminal.known_associates.map(
            associates => {
                return associates
            })
            
            render(knownAssociates)
            console.table(knownAssociates)
            showModalDialog()
    })
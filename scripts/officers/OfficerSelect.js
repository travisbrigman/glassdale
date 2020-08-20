/*
 *   officerselect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
 import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })
        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officersCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(
                    officerObject => {
                        return `<option value="${officerObject.name}">${officerObject.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

export const officerSelect = () => {
    getOfficers().then(() => {
        // Get all officers from application state
        const officers = useOfficers()
        
        render(officers)
    })
}
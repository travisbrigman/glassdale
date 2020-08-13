const contentTarget = document.querySelector(".witnessListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnessList") {
        const customEvent = new CustomEvent("showWitnessListClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessListButton = () => {
    contentTarget.innerHTML = "<button id= 'showWitnessList'>Show Witness List</button>"
}
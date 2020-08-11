const contentTarget = document.querySelector(".witnessListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnessList") {
        const customEvent = new CustomEvent("showWitnessListClicked")
        eventHub.dispatchEvent(customEvent)
        //FIXME: CONSOLE LOG BELOW
        console.log("Show Witnesses Clicked")
    }
})

export const ShowWitnessListButton = () => {
    contentTarget.innerHTML = "<button id= 'showWitnessList'>Show Witness List</button>"
}
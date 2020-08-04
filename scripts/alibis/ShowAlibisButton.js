const contentTarget = document.querySelector(".alibisButton")
const eventHub = document.querySelector(".container")

const closeModalDialog = () => { 
    document.getElementById("alibiDialog").close();
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith(`associates--`)) {
        const [prefix, criminalId] = clickEvent.target.id.split(`--`)
        console.log(criminalId)
        const customEvent = new CustomEvent("alibisButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })
        console.log("alibis button clicked!")
        eventHub.dispatchEvent(customEvent)
    }
    if (clickEvent.target.id === "alibiDialog") {
        closeModalDialog()
    }
})



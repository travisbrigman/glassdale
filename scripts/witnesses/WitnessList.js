import { useWitnesses } from "./WitnessDataProvider.js"
import { witnessHTMLconverter } from "./WitnessHtml.js"

const contentTarget = document.querySelector(".criminalsContainer")
//witnessListContainer
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessListClicked", () => {
    const witnessArray = useWitnesses()
    render(witnessArray)
})



const render = (witnessObject) => {
    let witnessString = ""

    witnessObject.forEach(witness => {
        witnessString += witnessHTMLconverter(witness)
    });
    contentTarget.innerHTML = witnessString
}


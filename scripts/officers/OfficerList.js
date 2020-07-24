import { useOfficers, getOfficers } from "./OfficerProvider.js"
import { officerHTML } from "./OfficerHTMLconverter.js"

const contentTarget = document.querySelector(".filters__officer")

export const officerList = () => {
    //triggers the fetch call and populates an array with the fetched data
    getOfficers()

    //turn data into HTML using HTML Converter
    .then(() => {
        // declare a value of the array thet getOfficers() made
        const officerArray = useOfficers()
        // create an empty string to store HTML represenation of our data
        let officerHTMLrepresentation = ""
        // convert each JSON object in the array into a chunk of HTML
        officerArray.forEach(officer => {
            officerHTMLrepresentation += officerHTML(officer)
        })
        // adds the string of HTML to the HTML document
        contentTarget.innerHTML = officerHTMLrepresentation
    })

}
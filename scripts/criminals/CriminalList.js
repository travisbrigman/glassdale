import { criminalHTML } from "./CriminalHTMLconverter.js"           //1️⃣
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"


const contentTarget = document.querySelector(".criminalsContainer") //2️⃣

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
       
        /* Filter the criminals application state down to the people that committed the crime */

        const crimeThatWasSelected = event.detail.crimeThatWasChosen 
        
        const arrayOfCrimes = useConvictions()
        
        const foundCrimeObject = arrayOfCrimes.find(
            crime => {
                return parseInt(crimeThatWasSelected) === crime.id
            }
        )

        const appStateCriminals = useCriminals()


       const matchingCriminals = appStateCriminals.filter(
           (currentCriminalObject) => {
               return foundCrimeObject.name === currentCriminalObject.conviction 
           }
       )
       
       /* Then invoke render() and pass the filtered collection as an argument */

       render(matchingCriminals)
})

eventHub.addEventListener("officerSelected", event => {
    console.log("CriminalList: cusom event heard on Event Hub")

    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const filteredByArrestingOfficer = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
            return false
        }
    )
    render(filteredByArrestingOfficer)
})

const render = (criminalCollection) => {
    let criminalHTMLrepresentation = ""                         //7️⃣

    criminalCollection.forEach(criminal => {                         //8️⃣
        criminalHTMLrepresentation += criminalHTML(criminal)   
    })
    contentTarget.innerHTML = `<h2>Convicted Criminals</h2> ${ criminalHTMLrepresentation }`        //9️⃣
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const appStateCriminals = useCriminals()
        render(appStateCriminals)
    })
}

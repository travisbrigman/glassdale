import { Criminal } from "./CriminalHTMLconverter.js"           //1️⃣
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"

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

// const render = (criminalCollection) => {
//     let criminalHTMLrepresentation = ""

//     criminalCollection.forEach(criminal => {
//         criminalHTMLrepresentation += criminalHTML(criminal)   
//     })
//     contentTarget.innerHTML = `<h2>Convicted Criminals</h2> ${ criminalHTMLrepresentation }`
// }

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}


export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

import { Criminal } from "./CriminalHTMLconverter.js";
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import {
    getCriminalFacilities,
    useCriminalFacilities,
} from "../facility/CriminalFacilityProvider.js";

const contentTarget = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");


//💾 State Variables
let criminals = [];
let criminalFacilities = [];
let facilities = [];
const chosenFilters = {
    crime: "0",
    officer: "0",
};

export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      // Pull in the data now that it has been fetched
     facilities = useFacilities();
     criminalFacilities = useCriminalFacilities();
     criminals = useCriminals();
      
      render();
    });
};

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  chosenFilters.crime = event.detail.crimeThatWasChosen;  
  filterCriminals();
  render();
});

eventHub.addEventListener("officerSelected", (event) => {
  // How can you access the officer name that was selected by the user?
  chosenFilters.officer = event.detail.officer;
  filterCriminals();
  render();
});

const filterCriminals = () => {
  criminals = useCriminals();
  const arrayOfCrimes = useConvictions();

  if (chosenFilters.crime !== "0") {
    const foundCrimeObject = arrayOfCrimes.find(
        (crime) => {
      return parseInt(chosenFilters.crime) === crime.id;
    });
    

    criminals = criminals.filter(
        (currentCriminalObject) => {
      return foundCrimeObject.name === currentCriminalObject.conviction;
    });
  }
  if (chosenFilters.officer !== "0") {
    criminals = criminals.filter(
        (criminalObject) => {
      if (criminalObject.arrestingOfficer === chosenFilters.officer) {
        return true;
      }
      return false;
    });
  }
};

const render = () => {
  const arrayOfCriminalHTMLRepresentations = criminals.map(
      (criminalObject) => {
        const facilityRelationshipsForThisCriminal = criminalFacilities.filter(
      (cf) => { 
          return cf.criminalId === criminalObject.id 
        }
    );
    
    const matchingFacilities = facilityRelationshipsForThisCriminal.map(
        (currentRelationship) => {
            return facilities.find(
                (facility) => { 
                    return facility.id === currentRelationship.facilityId
                }
                );
            }
            );
        
            return Criminal(criminalObject, matchingFacilities);
        }
        );
        
  contentTarget.innerHTML = `
        <h2>Glassdale Convicted Criminals</h2>
        <article class="criminalList">
        ${arrayOfCriminalHTMLRepresentations.join("")}
        </article>
    `;
};


//1️⃣ Import components from other modules
//2️⃣ establish the class the query selector will search for
//3️⃣ Estiblash a function that will trigger the process of turning JSON data to something displayed on the DOM
//4️⃣ invoke the function that fetches data and populates an array with objects
//5️⃣ use .then() method to turn data into HTML using HTML converter function
//6️⃣ declare a variable whose variable is the array that was populated in the 'get' function
//7️⃣ declare a variable that will hold the HTML representation string value that will be made by iterating over they above array
//8️⃣ iterate over the array and for each object, pass parameters into the HTML converter and then append to the HTML representation string
//9️⃣ Add the HTML representation string to the HTML document.
//----------------------------------------------------------------------------------------------------------------------------------------------//



import { criminalHTML } from "./CriminalHTMLconverter.js"           //1️⃣
import { useCriminals, getCriminals } from "./CriminalProvider.js"

const contentTarget = document.querySelector(".criminalsContainer") //2️⃣

export const criminalList = () => {                                 //3️⃣

    getCriminals()                                                  //4️⃣

    .then(() => {                                                   //5️⃣
        const criminalArray = useCriminals()                        //6️⃣
        let criminalHTMLrepresentation = ""                         //7️⃣
        criminalArray.forEach(criminal => {                         //8️⃣
            criminalHTMLrepresentation += criminalHTML(criminal)    
        })
        contentTarget.innerHTML = criminalHTMLrepresentation        //9️⃣
    })
}


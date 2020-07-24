
let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        //convert response to JSON
        .then (response => response.json())
        //Makes date equal to empty array on line 1
        .then (parsedCriminals => {
            //console.table(parsedCriminals)
            criminals = parsedCriminals
        }
    )
    
}
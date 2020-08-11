
let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
}

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
        //convert response to JSON
        .then (response => response.json())
        //Makes date equal to empty array on line 1
        .then (parsedWitnesses => {
            witnesses = parsedWitnesses
            
        }
    )
    
}
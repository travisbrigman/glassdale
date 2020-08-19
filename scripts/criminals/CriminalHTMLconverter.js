// export const criminalHTML = (criminalObject) => {
//     return `
//         <article class="criminal">
//         <div id="criminal-card__text"><strong>Name:</strong> ${criminalObject.name}</div>
//         <div class="criminal-card__text"><strong>Age:</strong> ${criminalObject.age}</div>
//         <div class="criminal-card__text"><strong>Conviction:</strong> ${criminalObject.conviction}</div>
//         <div class="criminal-card__text"><strong>Incarceration Start:</strong> ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
//         <div class="criminal-card__text"><strong>Incarceration End:</strong> ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
//         <div class="alibisButton">
//         <button id= associates--${criminalObject.id}>Associate Alibis</button>
//         </div>
//         </article>
//     `
// }

export const Criminal = (criminalObject, facilities) => {
  return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(
                  criminalObject.incarceration.start
                ).toLocaleDateString()} and
                ${new Date(
                  criminalObject.incarceration.end
                ).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities
                      .map((f) => `<li>${f.facilityName}</li>`)
                      .join("")}
                </ul>
            </div>
            <button id="associates--${
              criminalObject.id
            }">Show Associates</button>
        </div>
    </div>
    `;
};

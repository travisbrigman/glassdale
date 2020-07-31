export const criminalHTML = (criminalObject) => {
    return `
        <article class="criminal">
        <div id="criminal-card__text"><strong>Name:</strong> ${criminalObject.name}</div>
        <div class="criminal-card__text"><strong>Age:</strong> ${criminalObject.age}</div>
        <div class="criminal-card__text"><strong>Conviction:</strong> ${criminalObject.conviction}</div>
        <div class="criminal-card__text"><strong>Incarceration Start:</strong> ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
        <div class="criminal-card__text"><strong>Incarceration End:</strong> ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
        </article>
    `
}
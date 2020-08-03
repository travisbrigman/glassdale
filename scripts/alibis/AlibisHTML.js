export const alibisHTMLConverter = (criminalObject) => {
    return `
             <article class="alibi">
             ${criminalObject.known_associates[0].name}
             ${criminalObject.known_associates[0].alibi}
             </article>
         `
 }
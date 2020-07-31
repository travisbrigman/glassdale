export const NoteHTMLConverter = noteObject => {
    return `
        <section class="note">
            <div class= "note--title">${noteObject.title}</div>
        <div class= "note--content">${noteObject.text}</div>
            <div class= "note--authhor">${noteObject.name}</div>
            <div class= "note--timestamp">${new Date(noteObject.timeStamp).toLocaleDateString('en-US')}</div>
        
        </section>
    `
}
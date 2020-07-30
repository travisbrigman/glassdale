export const NoteHTMLConverter = noteObject => {
    return `
        <section class="note">
            <div class= "note--title">${noteObject.title}</div>
            <div class= "note--content">${noteObject.content}</div>
            <div class= "note--authhor">${noteObject.author}</div>
            <div class= "note--timestamp">${new Date(noteObject.timestamp).toLocaleDateString('en-US')}</div>
        
        </section>
    `
}
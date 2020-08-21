export const NoteHTMLConverter = (noteObject, criminalObject) => {
  return `
        <section class="note">
            <div class= "note--title">${noteObject.title}</div>
        <div class= "note--content">${noteObject.text}</div>
            <div class= "note--author">${noteObject.name}</div>
            <div class= "note--criminal">${criminalObject.name}</div>
            <div class= "note--timestamp">${new Date(
              noteObject.timeStamp
            ).toLocaleDateString("en-US")}</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
            <button id="editNote--${note.id}">Edit</button>
            </section>
            `;
};

export const editForm = (noteObject) => {
  return `
                <form class="edit--note">
                    <div class= "note--title">${noteObject.title}</div>
                <div class= "note--content">${noteObject.text}</div>
                <input type="hidden" name="noteId" id="noteId" value="">
                    </form>
                    <button id="saveEdits--${note.id}">save</button>
                    `;
};

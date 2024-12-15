class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.id = Date.now();
    }
}

class NoteManager {
    constructor() {
        this.notes = [];
        this.notesContainer = document.getElementById('notes-container');
        this.noteForm = document.querySelector('.note-form');
        this.titleInput = document.getElementById('note-title');
        this.contentInput = document.getElementById('note-content');

        this.noteForm.addEventListener('submit', (e) => this.addNoteHandler(e));
    }
}
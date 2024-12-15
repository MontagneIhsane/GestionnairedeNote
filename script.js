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

    addNoteHandler(event) {
        event.preventDefault();
        const title = this.titleInput.value.trim();
        const content = this.contentInput.value.trim();

        if (title && content) {
            const newNote = new Note(title, content);
            this.notes.push(newNote);
            this.renderNotes();
            this.noteForm.reset();
        }
    }

    deleteNoteHandler(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
        this.renderNotes();
    }

    renderNotes() {
        this.notesContainer.innerHTML = '';
        this.notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');

            noteElement.innerHTML = `
                <h2>${note.title}</h2>
                <p>${note.content}</p>
                <button onclick="noteManager.deleteNoteHandler(${note.id})">Supprimer</button>
            `;

            this.notesContainer.appendChild(noteElement);
        });
    }
}

const noteManager = new NoteManager();
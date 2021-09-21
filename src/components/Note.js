import React from 'react';

const Note = ({removeNotes, note, id}) => {
    return (
        <li key={id} className="bg-warning rounded m-2 p-2 text-center list-group">
            <p><strong>{note.title}</strong></p>
            <p>{note.note}</p>
            <button
                className="btn btn-danger"
                onClick={() => removeNotes(id)}>
                <i className="bi bi-trash"> Удалить</i>
            </button>
        </li>
    );
};

export default Note;
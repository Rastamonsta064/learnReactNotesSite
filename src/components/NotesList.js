import React from 'react';
import Note from "./Note";

const NotesList = ({notes, removeNotes}) => {

    return (
        <div>
            <ul>
                {notes.map((note) =>
                    <Note note={note} key={note._id} id={note._id} removeNotes={removeNotes}/>
                )}
            </ul>
        </div>
    );
}

export default NotesList;
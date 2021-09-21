import React from 'react';
import Note from "./Note";

const NotesList = ({notes, removeNotes}) => {

    return (
        <div>
            <ul>
                {notes.map((note, index) =>
                    <Note note={note} id={index} removeNotes={removeNotes}/>
                )}
            </ul>
        </div>
    );
}

export default NotesList;
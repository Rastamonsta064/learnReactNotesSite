import React from 'react';
import Note from "./Note";

const NotesList = ({notes, removeNotes}) => {

    return (
        <div>
            <ul>
                {notes.map((note, index) =>
                    <Note note={note} key={note._id} id={note._id} index={index} removeNotes={removeNotes}/>
                )}
            </ul>
        </div>
    );
}

export default NotesList;
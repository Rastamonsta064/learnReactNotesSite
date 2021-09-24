import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updateNote} from "../redux/actions";

const Note = ({removeNotes, note, id}) => {

    const [isEdit, setIsEdit] = useState(false);

    const [editedNote, setEditedNote] = useState({noteTitle: note.noteTitle, noteBody: note.noteBody});

    const dispatch = useDispatch();

    const saveEditedNoteHandler = () => {
        if (editedNote.noteTitle && editedNote.noteTitle) {
            dispatch(updateNote(id, editedNote));
            setIsEdit(false);
        }

    }

    switch (isEdit) {
        case true:
            return (
                <li className="bg-warning rounded m-2 p-2 text-center list-group">
                    <div className="row">
                        <div className="col">
                            <input value={editedNote.noteTitle}
                                   onChange={(e) => setEditedNote({...editedNote, noteTitle: e.target.value})}
                                   type="text"
                                   className="form-control"
                                   placeholder="Заголовок"/>
                            <textarea
                                value={editedNote.noteBody}
                                onChange={(e) => setEditedNote({...editedNote, noteBody: e.target.value})}
                                className="form-control"
                                rows="3"
                                placeholder="Текст заметки"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-danger m-1" onClick={saveEditedNoteHandler}>
                                <i className="bi bi-save text-warning"></i>
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger m-1" onClick={() => setIsEdit(false)}>
                                <i className="bi bi-x-square text-warning"></i>
                            </button>
                        </div>
                    </div>
                </li>
            )
        case false:
            return (
                <li className="bg-warning rounded m-2 p-2 text-center list-group">
                    <div className="row">
                        <div className="col">
                            <p className="bg-danger rounded text-light"><strong>{note.noteTitle}</strong></p>
                            <p>{note.noteBody}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button
                                className="btn btn-danger m-1"
                                onClick={() => removeNotes(id)}>
                                <i className="bi bi-trash text-warning"></i>
                            </button>

                        </div>
                        <div className="col">
                            <button
                                className="btn btn-danger m-1" onClick={() => setIsEdit(true)}>
                                <i className="bi bi-pencil-square text-warning"></i>
                            </button>
                        </div>
                    </div>


                </li>
            );
    }
};

export default Note;
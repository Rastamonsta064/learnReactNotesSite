import React, {useEffect} from 'react';
import Form from "./Form";
import NotesList from "./NotesList";
import {useDispatch, useSelector} from "react-redux";
import {addNote, deleteNote, getNotes} from "../redux/actions";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    const notes = useSelector(state => state.notes);

    const removeNotes = (id) => {
        dispatch(deleteNote(id));
        dispatch(getNotes());
    }

    const saveHandler = (newNote) => {
        dispatch(addNote(newNote));
    }

    const loadMoreHandler = () => {
        dispatch(getNotes());

    }

    return (
        <>
            <div className="container bg-danger my-2 p-2 align-content-center rounded">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-light"><i className="bi bi-journal-bookmark-fill"></i> Заметки</h2>
                    </div>
                </div>
            </div>
            <div className="container bg-danger my-2 p-2 align-content-center rounded">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-light">Заполни форму и нажми сохранить!</h2>
                        <p className="text-light">Все заметки сохраняются в базу данных Mondo DB Atlas</p>
                    </div>
                    <div className="row m-0">
                        <div className="col-4">
                            <Form saveHandler={saveHandler}/>
                        </div>
                        <div className="col-8 text-center">
                            <NotesList removeNotes={removeNotes} notes={notes}/>
                            <button className="btn btn-outline-light" onClick={loadMoreHandler}>ЗАГРУЗИТЬ ЕЩЁ</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Main;
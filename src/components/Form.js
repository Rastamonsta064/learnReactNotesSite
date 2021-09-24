import React, {useState} from 'react';

const Form = ({saveHandler}) => {

    const [note,setNote] = useState({noteTitle:"",noteBody:""});

    const clear = () => {
        setNote({noteTitle:"",noteBody:""});
    }

    const saveNewNoteHandler = () => {
        if(note.noteTitle && note.noteBody){
            saveHandler(note);
            clear();
        }
    }

    return (
        <div className="text-center bg-warning rounded p-2">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-danger"><strong>Введите заголовок:</strong></label>
                <input value={note.noteTitle}
                       onChange={(e)=>setNote({...note,noteTitle:e.target.value})}
                       type="text"
                       className="form-control"
                       id="exampleFormControlInput1"
                       placeholder="Заголовок"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-danger m-1"><strong>Текст заметки:</strong></label>
                <textarea
                    value={note.noteBody}
                    onChange={(e)=>setNote({...note,noteBody:e.target.value})}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Текст заметки"/>
            </div>
            <div>
                <button className="btn btn-outline-danger m-1" onClick={saveNewNoteHandler}>Сохранить</button>
                <button className="btn btn-outline-danger m-1" onClick={clear}>Очистить</button>
            </div>
        </div>
    );
};

export default Form;
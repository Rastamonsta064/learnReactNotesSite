import React, {useState} from 'react';
import Form from "./Form";
import NotesList from "./NotesList";

const Main = () => {

    const [notes,setNotes] = useState([{title:"Первая заметка", note:"Сам текст первой заметки"},
        {title:"Вторая заметка", note:"Сам текст второй заметки"}]);

    const removeNotes = (id) => {
        let temp = notes;
        temp.splice(id,1);
        setNotes([...temp]);
    }

    return (
        <>
            <div className="container bg-danger my-2 p-2 align-content-center rounded">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-light">******ЗАМЕТКИ******</h2>
                    </div>
                </div>
            </div>
            <div className="container bg-danger my-2 p-2 align-content-center rounded">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-light">Заполни форму и нажми сохранить!</h2>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form  setNotes={setNotes} notes={notes}/>
                        </div>
                        <div className="col-6">
                            <NotesList removeNotes={removeNotes} notes={notes}/>
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Main;
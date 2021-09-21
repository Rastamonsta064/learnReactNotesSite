import React, {useState} from 'react';

const Form = ({setNotes,notes}) => {

    const [note,setNote] = useState({title:"",note:""});

    const saveHandler = () => {
        if(note.title && note.note){
            setNotes([...notes,note]);
            setNote({title:"",note:""});
        }
    }

    return (
        <div className="text-center">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-light">Введите заголовок:</label>
                <input value={note.title}
                       onChange={(e)=>setNote({...note,title:e.target.value})}
                       type="text"
                       className="form-control"
                       id="exampleFormControlInput1"
                       placeholder="Заголовок"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-light m-1">Текст заметки:</label>
                <textarea
                    value={note.note}
                    onChange={(e)=>setNote({...note,note:e.target.value})}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Текст заметки"/>
            </div>
            <div>
                <button className="btn btn-outline-light m-1" onClick={saveHandler}>Сохранить</button>
                <button className="btn btn-outline-light m-1" onClick={()=>setNote({title:"",note:""})}>Очистить</button>
            </div>
        </div>
    );
};

export default Form;
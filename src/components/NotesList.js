import React, {useEffect} from 'react';
import Note from "./Note";
import useOnScreen from "../hooks/useOnScreen";
import {getNotes} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const NotesList = ({notes, removeNotes}) => {
    const [setRef, visible] = useOnScreen();
    const dispatch = useDispatch();
    const hasMore = useSelector(state => state.serverHasMore);

    useEffect(() => {
        if (visible) {
            dispatch(getNotes());
        }
    },[visible,dispatch]);

    return (
        <div>
            <ul>
                {notes.map((note, index) => {
                        return <Note
                            note={note}
                            key={note._id}
                            id={note._id}
                            index={index}
                            removeNotes={removeNotes}/>
                    }
                )}
            </ul>
            <div ref={hasMore ? setRef : null}></div>
        </div>
    );
}

export default NotesList;
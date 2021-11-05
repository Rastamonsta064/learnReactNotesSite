import React, {useEffect, useState} from 'react';
import Note from "./Note";
import useOnScreen from "../hooks/useOnScreen";
import {clearState, getNotes, getNotesSearch} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import FilterBar from "./FilterBar";

const NotesList = ({notes, removeNotes}) => {
    const [setRef, visible] = useOnScreen();
    const dispatch = useDispatch();
    const hasMore = useSelector(state => state.serverHasMore);

    const [keyword, setKeyword] = useState("");
    const [searchRes, setSearchRes] = useState(false);

    const clearSearch = () => {
        setKeyword("");
        setSearchRes(false);
        dispatch(clearState());
    }

    const searchHandler = () => {
        if (keyword) {
            setSearchRes(true);
            dispatch(clearState());
        }
    }

    useEffect(() => {
        if (visible) {
            if (!searchRes) {
                dispatch(getNotes());
            } else {
                dispatch(getNotesSearch(keyword));
            }
        }
        // eslint-disable-next-line
    }, [visible, searchRes, dispatch]);

    return (
        <div>
            <ul>
                <FilterBar
                    searchHandler={searchHandler}
                    keyword={keyword}
                    setKeyword={setKeyword}
                    clearSearch={clearSearch}
                />
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
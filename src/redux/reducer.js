import {DELL_NOTE, HAS_MORE, SET_NOTES, UPDATE_NOTES_NUMBER} from "./actions";

const initialState = {
    notes: [],
    loadedNotes:0,
    serverHasMore:true
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {...state, notes: [...state.notes, ...action.payload]};
        case DELL_NOTE:
            return {...state, notes: state.notes.filter(note => note._id !== action.payload)};
        case UPDATE_NOTES_NUMBER:
            return {...state, loadedNotes: action.payload};
        case HAS_MORE:
            return {...state, serverHasMore: false};
        default:
            return state;
    }
}

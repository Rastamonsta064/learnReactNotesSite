import {DELL_NOTE, SET_NOTES, UPDATE_NOTES_NUMBER} from "./actions";

const initialState = {
    notes: [],
    loadedNotes:0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return [...state, ...action.payload];
        case DELL_NOTE:
            return {...state, notes: state.notes.filter(note => note._id !== action.payload)};
        case UPDATE_NOTES_NUMBER:
            return {...state, loadedNotes: action.payload}
        default:
            return state;
    }
}

import {DELL_NOTE, SET_NOTES} from "./actions";

const initialState = {
    notes: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {...state, notes: action.payload};
        case DELL_NOTE:
            return {...state, notes: state.notes.filter(note => note._id !== action.payload)};
        default:
            return state;
    }
}

export const url = "https://server-for-notes.herokuapp.com/notes/";
export const localUrl =  "http://localhost:5000/notes/";
export const SET_NOTES = "SET_NOTES";
export const DELL_NOTE = "DELL_NOTE";
export const UPDATE_NOTES_NUMBER = "UPDATE_NOTES_NUMBER";


export const setNotes = (notes) => ({
    type: SET_NOTES,
    payload: notes
})

export const dellNote = (id) => ({
    type: DELL_NOTE,
    payload: id
})

export const updateNotesNumber = (newNumber) => ({
    type: UPDATE_NOTES_NUMBER,
    payload: newNumber
})

export const addNote = (newNote) => {
    return (dispatch) => {
        fetch(url + "add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Note Added");
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(() => dispatch(getNotes()))
            .catch(err => console.log(err));
    }
}

export const updateNote = (id, updatedNote) => {
    return (dispatch) => {
        fetch(url + "update/" + id, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNote)
        })
            .then(response => {
                if (response.ok) {
                    console.log(`Note id ${id} updated!`);
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(() => dispatch(getNotes()))
            .catch(err => console.log(err));
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        fetch(url + id, {method: "DELETE"})
            .then(response => {
                if (response.ok) {
                    dispatch(dellNote(id));
                    console.log(`Note with id ${id} deleted!`);
                } else {
                    throw new Error(response.status.toString());
                }
            })
    }
}

export const getNotes = () => {
    return (dispatch,getState) => {
        const skip = getState().loadedNotes;
        fetch(url+"?skip="+skip, {method: "GET"})
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status.toString());
                }
            })
            .then(notes => dispatch(setNotes(notes)))
            .catch(error => console.log(error.message));
    }
}
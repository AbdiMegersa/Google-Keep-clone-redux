import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: JSON.parse(localStorage.getItem('notes'))  || []
}

export const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        deleteNote: (state, action) => {
            const oldNotes = state.notes.filter(n => n.id !== action.payload)
            state.notes = [...oldNotes]
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        updateTitle: (state, action) => {
            const {id, title} = action.payload
            state.notes = state.notes.map(n => {
                if (n.id === id){
                    return {...n, title}
                }
                return n
            })
            localStorage.setItem('notes', JSON.stringify(state.notes));
            // const note = state.notes.find(note => note.id === id);
            // if (note) {
            //     note.title = title;
            // }
        },
        updateContent: (state, action) => {
            state.notes = state.notes.map(n => {
                if (n.id === action.payload.id){
                    return {...n, content: action.payload.content}
                }
                return n
            })
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
    }

})

export const {addNote,updateTitle, updateContent, deleteNote} = noteSlice.actions
export default noteSlice.reducer
            
            
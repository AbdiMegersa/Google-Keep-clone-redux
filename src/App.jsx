import React, { useState } from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {addNote, deleteNote, updateContent, updateTitle} from './feature/note/noteSlice'
import {nanoid} from 'nanoid'


function App() {
  // const [notes, setNotes] = useState([]);

  const notes = useSelector(state => state.note.notes)
  const dispatch= useDispatch()

  function addnotes() {
    // Add a new note to the notes array
    dispatch(addNote({ 
        id: nanoid(),
        title: '', 
        content: '' }))
    // setNotes([, ...notes ]);
  }

  function updateNoteTitle(id, title) {
    dispatch(updateTitle({id, title}))
  }

  function updateNoteContent(id, content) {
    dispatch(updateContent({id, content}))
  }

  function delnotes(id) {
    dispatch(deleteNote(id));
  }

  return (
    <div className="app">
      <header>
        <h1>Google Keep Clone</h1>
      </header>
      <main>
        <div className="add">
          <button onClick={addnotes}>Add Note</button>
        </div>
        
        <div className="notes">
          {notes.map((note, index) => (
            <div className="note" key={index}>
              <input
                type="text"
                placeholder="Title"
                value={note.title}
                onChange={(e) => dispatch(updateTitle({id: note.id,title: e.target.value}))}
              />
              <textarea
                placeholder="Take a note..."
                value={note.content}
                onChange={(e) => updateNoteContent(note.id, e.target.value)}
              />
              <div className="actions">
                <button onClick={() => delnotes(index)}>
                    {/* <FontAwesomeIcon icon={faTrash} /> */}
                    <i className="fas fa-trash"></i>
                    {/* Delete */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

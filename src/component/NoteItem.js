import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

function NoteItem(props) {
  const context=useContext(NoteContext)
  const {deleteNote} =context
    const {note,toggleUpdateNote}=props;
  return (
      <div className="card bg-dark text-warning ml-1 mb-1 noteItem" >
            <div className="card-body">
              <h4 className="card-title text-light d-inline">{note.title}</h4>
              <p className="card-text text-warning">
                {note.description}
              </p>
              <div className="d-flex justify-content-between align-items">
                <i className="fa-solid fa-trash text-danger" onClick={()=>deleteNote(note._id)}></i>
                <i className="fa-regular fa-pen-to-square text-info" onClick={()=>{toggleUpdateNote(note)}}></i>
              </div>
            </div>
        </div>
  )
}

export default NoteItem

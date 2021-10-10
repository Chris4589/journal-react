import { db } from "../firebase/firebase-config";
import { loadnotes } from "../helpers/loadnotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispach, getState) => {
    //getState es igual a useSelector pero dentro de thunk
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    };

    const doc = await db.collection(`${uid}/jornal/notes`).add(newNote);
    console.log(doc);
    dispach(ActiveNote(doc.id, newNote));
  }
};

export const ActiveNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
});

export const startNoteL = (uid) => {
  return async (dispatch) => {
    const notes = await loadnotes(uid);
    dispatch(setNote(notes));
  }
}

export const setNote = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
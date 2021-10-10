import { db } from "../firebase/firebase-config"

export const loadnotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/jornal/notes`).get();
  const notes = [];

  notesSnap.forEach((snap) => {
    notes.push({
      id: snap.id,
      ...snap.data()
    });
  });

  return notes;
}

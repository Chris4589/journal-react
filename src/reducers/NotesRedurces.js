import { types } from "../types/types";

const init = {
  notes: [],
  active: null
};

export const NotesRedurces = (state = init, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
      case types.notesLoad:
        return {
          ...state,
          notes: [...action.payload]
        }

    default:
      return state;
  }
}

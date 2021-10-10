import { types } from "../types/types";

const init = {
  loading: false,
  msg: null
}

export const uiReducer = (state = init, action) => {
  console.log(action.payload)
  switch (action.type) {
    case types.setError: {
      console.log(types.setError)
      return {
        ...state,
        msg: action.payload.msg
      }
    }
    
    case types.removeError: {
      return {
        ...state,
        msg: null
      }
    }
    default:
      return state;
  }
}

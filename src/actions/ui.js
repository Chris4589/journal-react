import { types } from "../types/types"

export const setError = (msg) => ({
    type: types.setError,
    payload: {
      msg
    }
});

export const removeError = () => ({
  type: types.removeError,
});

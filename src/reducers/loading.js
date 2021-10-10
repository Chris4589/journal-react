import { types } from "../types/types";

const load =  {
  loading: false
};

export const loading = (state = load, action) => {
  switch (action.type) {
    case types.loading:
      return {
        loading: true,
      }

    case types.unloading:
      return {
        loading: false,
      }
    
  
    default:
      return state;
  }
}

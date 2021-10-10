import { types } from "../types/types"

export const load = () => ({
  type: types.loading
});

export const unload = () => ({
  type: types.unloading
});
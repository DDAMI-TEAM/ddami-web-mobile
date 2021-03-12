import * as types from "../types";

export const setTownFilterModal = (modalState) => {
  return {
    type: types.SET_MODAL,
    payload: modalState,
  };
};

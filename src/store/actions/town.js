import * as types from "../types";

export const setTownFilterModal = (modalState) => {
  return {
    type: types.SET_MODAL,
    payload: modalState,
  };
};

export const setTownFilters = (filters) => {
  return {
    type: types.SET_TOWN_FILTER,
    payload: filters,
  };
};

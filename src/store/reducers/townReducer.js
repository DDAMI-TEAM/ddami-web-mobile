import * as types from "../types";

const SORT_TYPE = {
  POPULARITY: "POPULARITY",
  LATEST: "LATEST",
};

const initialState = {
  modalState: false,
  sortBy: SORT_TYPE.POPULARITY,
  filters: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_MODAL:
      return {
        ...state,
        modalState: payload,
      };
    case types.SET_TOWN_FILTER:
      return {
        ...state,
        filters: payload,
      };
    case types.SET_TOWN_SORT:
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
}

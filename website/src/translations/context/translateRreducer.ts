import { types } from "../types/types";

export const translateReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.changeLanguage:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}
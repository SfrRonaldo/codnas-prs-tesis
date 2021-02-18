import { SET_CURRENT_PR, FORM_VALIDATE, CLEAR_PR } from "../../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PR:
      return { ...state, pr: action.payload };
    case FORM_VALIDATE:
      return { ...state, errorFormulario: action.payload };
    case CLEAR_PR:
      return { ...state, pr: null };
    default:
      return state;
  }
};

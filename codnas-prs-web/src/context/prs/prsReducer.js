import { PR_FORM, FORM_VALIDATE } from "../../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case PR_FORM:
      return { ...state, formulario: true };
    case FORM_VALIDATE:
      return { ...state, erroFormulario: true };
    default:
      return state;
  }
};

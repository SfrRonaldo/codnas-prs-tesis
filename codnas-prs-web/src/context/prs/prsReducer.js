import { FORMULARIO_PR, VALIDAR_FORMULARIO } from "../../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PR:
      return { ...state, formulario: true };
    case VALIDAR_FORMULARIO:
      return { ...state, erroFormulario: true };
    default:
      return state;
  }
};

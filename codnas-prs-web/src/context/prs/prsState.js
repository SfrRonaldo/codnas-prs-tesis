import React, { useReducer } from "react";
import prsReducer from "./prsReducer";
import prsContext from "./prsContext";
import { PR_FORM, FORM_VALIDATE } from "../../types";

const PrsState = (props) => {
  const initialState = {
    formulario: false,
    errorFormulario: false,
    pr: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(prsReducer, initialState);

  // Funciones
  const showForm = () => {
    dispatch({ type: PR_FORM });
  };

  // Validar el formulario por errores
  const showError = () => {
    dispatch({ type: FORM_VALIDATE });
  };

  return (
    <prsContext.Provider
      value={{
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        pr: state.pr,
        showForm,
        showError,
      }}
    >
      {props.children}
    </prsContext.Provider>
  );
};

export default PrsState;

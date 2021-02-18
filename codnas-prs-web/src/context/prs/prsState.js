import React, { useReducer } from "react";
import prsReducer from "./prsReducer";
import prsContext from "./prsContext";
import { SET_CURRENT_PR, FORM_VALIDATE, CLEAR_PR } from "../../types";

const PrsState = (props) => {
  const initialState = {
    errorFormulario: "NO_ERROR",
    pr: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(prsReducer, initialState);

  // Funciones
  const setCurrentPr = (pr) => {
    dispatch({ type: SET_CURRENT_PR, payload: pr });
  };

  // Validar el formulario por errores
  const showError = (error) => {
    dispatch({ type: FORM_VALIDATE, payload: error });
  };

  // Limpiar Pr
  const clearPr = () => {
    dispatch({ type: CLEAR_PR });
  };

  return (
    <prsContext.Provider
      value={{
        errorFormulario: state.errorFormulario,
        pr: state.pr,
        setCurrentPr,
        showError,
        clearPr,
      }}
    >
      {props.children}
    </prsContext.Provider>
  );
};

export default PrsState;

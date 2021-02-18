import React, { useReducer } from "react";
import prsReducer from "./prsReducer";
import prsContext from "./prsContext";
import { SET_CURRENT_PR, CLEAR_PR } from "../../types";

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
        clearPr,
      }}
    >
      {props.children}
    </prsContext.Provider>
  );
};

export default PrsState;

import React, { useReducer } from "react";
import prsReducer from "./prsReducer";
import prsContext from "./prsContext";
import { SET_CURRENT_PR, CLEAR_PR } from "../../types";

const PrsState = (props) => {
  const initialState = {
    pr: localStorage.getItem("pr"),
    lower: localStorage.getItem("lower"),
    higher: localStorage.getItem("higher"),
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

  // Obtener Pr de LocalStorage
  const getPr = () => {
    const pdbChain = localStorage.getItem("pr");
    const low = localStorage.getItem("lower");
    const high = localStorage.getItem("higher");
    return { pdbChain, low, high };
  };

  return (
    <prsContext.Provider
      value={{
        pr: state.pr,
        setCurrentPr,
        clearPr,
        getPr,
      }}
    >
      {props.children}
    </prsContext.Provider>
  );
};

export default PrsState;

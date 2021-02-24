import React, { useReducer } from "react";
import prsReducer from "./prsReducer";
import prsContext from "./prsContext";
import axios from "axios";
import {
  GET_PRS,
  SET_DETAIL_INFO,
  SET_ESTIMATE_INFO,
  SET_CURRENT_PR,
  CLEAR_PR,
} from "../../types";

const PrsState = (props) => {
  const initialState = {
    prs: [],
    pr: localStorage.getItem("pr"),
    lower: localStorage.getItem("lower"),
    higher: localStorage.getItem("higher"),
    infoGeneral: null,
    infoEstructural: null,
    conformaciones: null,
    loading: true,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(prsReducer, initialState);

  // Funciones
  // Obtener las proteínas repetidas
  const getPrs = async () => {
    const result = await axios.get("/api/GetAll");
    dispatch({ type: GET_PRS, payload: result.data });
  };

  // Obtener informacion para la página Detail
  const getDetailInfo = async (pr) => {
    const urlInfoGeneral = `/api/GetInfoGeneral/${pr}`;
    const urlInfoEstructural = `/api/GetInfoEstructural/${pr}`;
    const urlConformaciones = `/api/GetConformacion/${pr}`;
    const [res1, res2, res3] = await Promise.all([
      axios(urlInfoGeneral),
      axios(urlInfoEstructural),
      axios(urlConformaciones),
    ]);
    setTimeout(() => {
      dispatch({
        type: SET_DETAIL_INFO,
        payload: {
          res1: res1.data.InfoGeneral[0],
          res2: res2.data.InfoEstructural,
          res3: res3.data.Conformacion,
        },
      });
    }, 3000);
  };

  // Obtener informacion para la pagina Estimate
  const getEstimateInfo = async (obj) => {
    const urlInfoGeneral = `/api/EstimarInfoGeneral/${obj.pr}_${obj.lower}_${obj.higher}`;
    const urlConformaciones = `/api/EstimarConformacion/${obj.pr}_${obj.lower}_${obj.higher}`;
    const [res1, res2] = await Promise.all([
      axios(urlInfoGeneral),
      axios(urlConformaciones),
    ]);
    setTimeout(async () => {
      const urlInfoEstructural = `/api/EstimarInfoEstructural/${obj.pr}_${obj.lower}_${obj.higher}`;
      const res3 = await axios.get(urlInfoEstructural);
      console.log(res3);
      dispatch({
        type: SET_ESTIMATE_INFO,
        payload: { res1: res1.data, res2: res2.data, res3: res3.data },
      });
    }, 3000);
  };

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
        prs: state.prs,
        pr: state.pr,
        lower: state.lower,
        higher: state.higher,
        infoGeneral: state.infoGeneral,
        infoEstructural: state.infoEstructural,
        conformaciones: state.conformaciones,
        loading: state.loading,
        getPrs,
        getDetailInfo,
        getEstimateInfo,
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

import {
  GET_PRS,
  SET_DETAIL_INFO,
  SET_ESTIMATE_INFO,
  SET_CURRENT_PR,
  CLEAR_PR,
} from "../../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case GET_PRS:
      return { ...state, prs: action.payload };
    case SET_DETAIL_INFO:
      return {
        ...state,
        infoGeneral: action.payload.res1,
        infoEstructural: action.payload.res2,
        conformaciones: action.payload.res3,
        loading: false,
      };
    case SET_ESTIMATE_INFO:
      return {
        ...state,
        infoGeneral: action.payload.res1,
        infoEstructural: action.payload.res3,
        conformaciones: action.payload.res2,
        loading: false,
      };
    case SET_CURRENT_PR:
      localStorage.setItem("pr", action.payload.pdbChain);
      localStorage.setItem("lower", action.payload.lower);
      localStorage.setItem("higher", action.payload.higher);
      return {
        ...state,
        pr: action.payload.pdbChain,
        lower: action.payload.lower,
        higher: action.payload.higher,
      };
    case CLEAR_PR:
      localStorage.removeItem("pr");
      localStorage.removeItem("lower");
      localStorage.removeItem("higher");
      return {
        ...state,
        pr: null,
        lower: null,
        higher: null,
        infoGeneral: null,
        infoEstructural: null,
        conformaciones: null,
        loading: true,
      };
    default:
      return state;
  }
};

import { SET_CURRENT_PR, CLEAR_PR } from "../../types";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PR:
      localStorage.setItem("pr", action.payload.pdbChain);
      localStorage.setItem("lower", action.payload.lower);
      localStorage.setItem("higher", action.payload.higher);
      return {
        ...state,
        pr: action.payload.pr,
        low: action.payload.lower,
        high: action.payload.higher,
      };
    case CLEAR_PR:
      localStorage.removeItem("pr");
      localStorage.removeItem("lower");
      localStorage.removeItem("higher");
      return {
        ...state,
        pr: null,
        low: null,
        high: null,
      };
    default:
      return state;
  }
};

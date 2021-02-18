import { SHOW_ALERT, HIDDEN_ALERT } from "../../types/index";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { alerta: action.payload };
    case HIDDEN_ALERT:
      return { alerta: null };
    default:
      return state;
  }
};

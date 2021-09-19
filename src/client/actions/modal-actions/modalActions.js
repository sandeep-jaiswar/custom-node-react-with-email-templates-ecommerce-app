import { HIDE_MODAL, SHOW_MODAL } from "../../constants/modal";


export const showModal = (input) => {
  return {
    type: SHOW_MODAL,
    payload: input
  };
};

export const hideModal = (input) => {
  return {
    type: HIDE_MODAL,
    payload: input
  };
};

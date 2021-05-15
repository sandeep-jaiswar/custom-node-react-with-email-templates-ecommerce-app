import { HIDE_TOAST, SHOW_TOAST } from "../../constants/toastMessage";

export const showToastMessage = (input) => {
  return {
    type: SHOW_TOAST,
    payload: input
  };
};

export const hideToastMessage = (input) => {
  return {
    type: HIDE_TOAST,
    payload: input
  };
};
import { HIDE_TOAST, SHOW_TOAST } from "../../constants/toastMessage";

const initialState = {
  toasts: []
};

export const toastReducers = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toasts: payload,
        timestamp: Date.now(),
      };
    case HIDE_TOAST:
      return {
        ...state,
        toasts: []
      };
    default:
      return { ...state };
  }
};

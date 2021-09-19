import { HIDE_MODAL, SHOW_MODAL } from "../../constants/modal";
import { HIDE_POPOVER, SHOW_POPOVER } from "../../constants/popover";
import { HIDE_SLIDER, SHOW_SLIDER } from "../../constants/slider";
import { HIDE_TOAST, SHOW_TOAST } from "../../constants/toastMessage";

const initialState = {
  toasts: null,
  slider: null,
  popover: null,
  modal: null
};

export const configReducers = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toasts: {
          current: payload,
          timestamp: Date.now()
        }
      };
    case HIDE_TOAST:
      return {
        ...state,
        toasts: null
      };
    case SHOW_SLIDER:
      return {
        ...state,
        slider: {
          current: payload,
          timestamp: Date.now()
        }
      };
    case HIDE_SLIDER:
      return {
        ...state,
        slider: null
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: {
          current: payload,
          timestamp: Date.now()
        }
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: null
      };
    case SHOW_POPOVER:
      return {
        ...state,
        popover: {
          current: payload,
          timestamp: Date.now()
        }
      };
    case HIDE_POPOVER:
      return {
        ...state,
        popover: null
      };
    default:
      return { ...state };
  }
};

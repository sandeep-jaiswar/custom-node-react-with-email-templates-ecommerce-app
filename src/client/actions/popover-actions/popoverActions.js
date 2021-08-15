import { HIDE_POPOVER, SHOW_POPOVER } from "../../constants/popover";

export const showPopover = (input) => {
  return {
    type: SHOW_POPOVER,
    payload: input
  };
};

export const hidePopover = (input) => {
  return {
    type: HIDE_POPOVER,
    payload: input
  };
};

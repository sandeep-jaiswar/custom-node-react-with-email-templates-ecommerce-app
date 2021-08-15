import { HIDE_SLIDER, SHOW_SLIDER } from "../../constants/slider";

export const showSlider = (input) => {
  return {
    type: SHOW_SLIDER,
    payload: input
  };
};

export const hideSlider = (input) => {
  return {
    type: HIDE_SLIDER,
    payload: input
  };
};

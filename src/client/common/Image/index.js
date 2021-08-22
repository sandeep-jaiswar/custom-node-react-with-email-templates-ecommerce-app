import React from "react";
import PropTypes from "prop-types";

export default function Image(props) {
  const { url = "", customWrapper = "", customImgClass = "" } = props;
  return (
    <picture className={`lib-img-wrapper ${customWrapper}`}>
      <img src={url} alt={url} className={`default-img ${customImgClass}`} />
    </picture>
  );
}

Image.prototype = {
  url: PropTypes.string.isRequired,
  customWrapper: PropTypes.string,
  customImgClass: PropTypes.string
};

import React from "react";
import PropTypes from "prop-types";

export default function Image(props) {
  const { url = "", customImgClass = "" } = props;

  return (
    <a href={url} className={`progressive replace ${customImgClass}`}>
      <img src={url} className={`preview ${customImgClass}`} alt="image" />
    </a>
  )
}

Image.prototype = {
  url: PropTypes.string.isRequired,
  customImgClass: PropTypes.string
};

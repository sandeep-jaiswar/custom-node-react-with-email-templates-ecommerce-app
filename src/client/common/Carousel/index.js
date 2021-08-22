import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";

export default function Carousel(props) {
  const { imgUrls = [], customWrapper = "", customImgClass = "" } = props;
  return (
    <div className={`carousel-wrapper`}>
      <div className={`img-wrapper ${customWrapper}`}>
        {imgUrls.map((cur, index) => (
          <Image url={cur} key={index} customImgClass={customImgClass} />
        ))}
      </div>
    </div>
  );
}

Carousel.prototype = {
  customWrapper: PropTypes.string,
  customImgClass: PropTypes.string,
  imgUrls: PropTypes.element.isRequired
};

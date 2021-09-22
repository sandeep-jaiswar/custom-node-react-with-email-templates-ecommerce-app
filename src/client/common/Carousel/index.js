import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Image from "../Image";

const Carousel = forwardRef((props, ref) => {
  const { arr = [], customWrapper = "", customImgClass = "" } = props;
  const getSliderArrowBtn = key => {
    const left = key === 'left' ? 1 : 96;
    const getSvg = key => {
      if (key === 'left') {
        return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left leftArrow" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>)
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right rightArrow" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      )
    }
    return (
      <div className='svg-circle' style={{ left: `${left}%` }} onClick={() => {}}>
        <div className="svg-wrapper">
          {getSvg(key)}
        </div>
      </div>
    )
  }
  return (
    <div className='carousel-wrapper'>
      {getSliderArrowBtn('left')}
      <div ref={ref} className='slider-carousel'>
        {arr.map((cur, i) => (
          <div className='slider-carousel-content' key={i}>
            <Image url={cur.url} customImgClass={`slider-carousel-img`} />
            {cur.name && <div className='slider-carousel-footerText'>{cur.name}</div>}
          </div>
        ))}
      </div>
      {getSliderArrowBtn('right')}
    </div>
  )
});

Carousel.prototype = {
  customWrapper: PropTypes.string,
  customImgClass: PropTypes.string,
  arr: PropTypes.element.isRequired
};

export default Carousel;

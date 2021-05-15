import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
          <circle cx="12px" cy="12px" r="9px" className="circle" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;

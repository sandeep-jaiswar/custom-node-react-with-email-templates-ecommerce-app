import React, { useEffect, useRef } from "react";

const Icon = (props) => {
  const iconRef = useRef(null);
  useEffect(() => {
    iconRef.current.addEventListener("click", function () {
      iconRef.current.classList.add("icon-clicked");
      setTimeout(() => {
        iconRef.current.classList.remove("icon-clicked");
      }, 200);
    });
  }, []);
  return (
    <div ref={iconRef} className={`icon-wrapper`}>
      <div className={`${props.className}`}>{props.children}</div>
    </div>
  );
};

export default Icon;

import React from "react";
import PropTypes from 'prop-types';

const Button = props =>{
  const {
    size = 'md',
		type = 'primary',
		className = '',
		style = {},
		onClick = () => {},
  } = props;
  return(
    <button
    className={`${className} btn btn-${size} btn-${type}`}
    style={style}
    onClick={onClick}
    >
      {props.children}
    </button>
  )
}

Button.prototype = {
  type: PropTypes.oneOf(["primary", "warning", "info" , "success", "danger"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired
}


export default Button;
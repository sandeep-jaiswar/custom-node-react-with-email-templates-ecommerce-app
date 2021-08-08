import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { hideToastMessage } from "../../actions/toast-actions/toastActions";

const Toast = (props) => {
  const message = props.message;
  const animation = props.animation || true;
  const delay = props.delay || 500;
  const autohide = props.autohide || true;
  const dispatch = useDispatch();

  const hideToast = () => {
    dispatch(hideToastMessage());
  };
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("progress-bar").style.width = 0;
      setTimeout(() => {
        hideToast();
      }, 2000);
    }, delay);
  }, []);
  if (message) {
    return (
      <div className="toast-wrapper">
        <div id="progress-bar" className="progress"></div>
        <div onClick={hideToast} className="cross-icon"></div>
        <div className="message">{message}</div>
      </div>
    );
  }
  return null;
};

Toast.defaultProps = {
  message: "",
  animation: true,
  delay: 500,
  autohide: true
};

export default Toast;

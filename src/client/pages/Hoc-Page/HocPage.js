import React from "react";
import { useSelector } from "react-redux";
import Toast from "../../common/Toast";

export default function HocPage(props) {
  const toasts = useSelector((state) => state.config);
  return (
    <div className="page-wrapper">
      {props.children}
      <Toast message={toasts.message} />
    </div>
  );
}

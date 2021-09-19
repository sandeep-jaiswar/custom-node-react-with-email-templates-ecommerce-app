import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Modal from "../../common/Modal";
import Popover from "../../common/Popover";
import Slider from "../../common/Slider";
import Toast from "../../common/Toast";

export default function HocPage(props) {
  const { toasts, slider, popover,modal } = useSelector((state) => state.config);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(null);
  const [footerHeight, setFooterHeight] = useState(null);
  useEffect(() => {
    setFooterHeight(footerRef?.current?.clientHeight);
    setHeaderHeight(headerRef?.current?.clientHeight);
  }, []);
  return (
    <>
      <Header ref={headerRef} />
      <div className="page-wrapper" style={{ top: `${headerHeight }px` }}>
        {props.children}
      </div>
      <Footer ref={footerRef} />
      {toasts?.current && <Toast message={toasts.message} />}
      {slider?.current && <Slider />}
      {popover?.current && <Popover />}
      {modal?.current && <Modal name={modal.current} />}
    </>
  );
}

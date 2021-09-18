import React, { forwardRef, useEffect, useRef } from "react";
import { IoMdMenu, IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showPopover } from "../../actions/popover-actions/popoverActions";
import { showSlider } from "../../actions/slider-actions/sliderActions";
import Icon from "../Icon";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {BiSearchAlt2} from 'react-icons/bi';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Header = forwardRef((props, ref) => {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--firstColor"
  );
  const dispatch = useDispatch();
  const cartIconRef = useRef(null);
  const menuClickHandler = () => {
    dispatch(showSlider("MenuSlider"));
  };
  const isLocationCap = window.isLocationCap;
  const cartClickHandler = () => {
    dispatch(
      showPopover({
        id: "cartPopover",
        position: cartIconRef.current.getBoundingClientRect()
      })
    );
  };
  window.onscroll = () => {
    if (window.scrollY > 0) {
      if(!ref.current.classList.contains('fixed-header')){
        ref.current.classList.add("fixed-header");
      };
    } else {
      ref.current.classList.remove("fixed-header");
    }
  }

  if (!window.isMobile) {
    return (
      <div ref={ref} className="header web">
        <div className='header-content'>
          <div className='logo'>MART</div>
          <div className='deliver-location'>
            <HiOutlineLocationMarker/>
            {!!isLocationCap ? (<div className='loc-dtls'>
              <div>Hello,</div>
              <div>please select location</div>
            </div>) :(<div className='loc-dtls'>
              <div>Hello,</div>
              <div>please select location</div>
            </div>)}
          </div>
          <div className='searchcbar-wrapper'>
            <input type='text'></input>
            <BiSearchAlt2 size="1.5rem" />
          </div>
          <div className=''></div>
          <div className='orders-sec'>
            <div>
              <div>Returns</div>
              <div>and Orders</div>
            </div>
          </div>
          <div className='cart-sec'>
            <AiOutlineShoppingCart size="2rem"/>
            <div>Cart</div>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    ref.current.addEventListener("scroll", setSticky);
    return function cleanup() {
      ref.current.removeEventListener("scroll", setSticky);
    };
  }, []);


  return (
    <div ref={ref} className="header">
      <div className="wrapper">
        <Icon className="header-items" onClick={menuClickHandler}>
          <IoMdMenu size="10vw" color={`${iconColor}`} />
        </Icon>
        <div
          ref={cartIconRef}
          className="header-items"
          onClick={cartClickHandler}
        >
          <Icon>
            <IoIosCart size="10vw" color={`${iconColor}`} />
          </Icon>
        </div>
      </div>
    </div>
  );
});

export default Header;

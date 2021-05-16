import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
      <div className="app-logo">
      <img src="../../../../images/logo.svg" alt=""/>
      </div>
      <div className="header-links">
        <div className="header-link">Home</div>
        <div className="header-link">About</div>
        <div className="header-link">Contact</div>
        <div className="header-link">Blog</div>
        <div className="header-link">Careers</div>
      </div>
      <button className="request-invite">Request Invite</button>
      </div>
    </div>
  );
}

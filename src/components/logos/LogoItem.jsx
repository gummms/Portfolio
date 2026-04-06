import React from "react";

import "./Logos.css";

const LogoItem = ({ path, logo }) => {
  return (
    <li className="logo-box" id={logo}>
      <img src={path} alt={logo} className="logo-image" />
    </li>
  );
};

export default LogoItem;

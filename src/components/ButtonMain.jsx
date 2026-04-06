import React from "react";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Icones from "./Icones";

import "./Buttons.css";

const ButtonMain = ({
  path = "",
  icon,
  istyle,
  text,
  id,
  iid = "icon-btn",
  copyable = false,
}) => {
  const isExternal = path && path.startsWith("http");

  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 4500);
    });
  };

  const getType = (id) => {
    if (id === "Whatsapp") return "number";
    if (id === "Email") return "address";
    return "URL";
  };

  const type = getType(iid);

  const getTooltipText = (id) => {
    if (id === "Whatsapp") return <em>Send me a casual message!</em>;
    if (id === "Email") return <em>Send me a serious message!</em>;
    if (id === "LinkedIn") return <em>Send me a professional message!</em>;
    else return <em>Have fun!</em>;
  };

  const tiptext = getTooltipText(iid);

  const tooltipContent = copied ? (
    <>
      {iid} {type} copied. {tiptext}
    </>
  ) : (
    `Copy ${iid} ${type}`
  );

  return (
    <Link
      to={path}
      className={`btn ${id}`}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {icon && (
        <span className="icon-wrapper">
          <Icones style={istyle} icone={icon} id={iid} iconClass="brandIcon" />
        </span>
      )}
      <span className="btn-text">{text}</span>

      {copyable && (
        <span
          className={`copy-action ${copied ? "is-copied" : ""}`}
          onClick={handleCopy}
        >
          <span className="tooltip-box">{tooltipContent}</span>

          <Icones
            iconClass="copyIcon"
            key={copied ? "check" : "clone"}
            style={copied ? "solid" : "regular"}
            icone={copied ? "check" : "clone"}
            id="copy-icon"
          />
        </span>
      )}
    </Link>
  );
};

export default ButtonMain;

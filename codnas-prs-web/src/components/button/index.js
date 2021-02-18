import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--secondary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  width,
  to = "#!",
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (to === "")
    return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={{ width: width }}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={{ width: width }}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;

import React, { useEffect, useState } from "react";
import { getNewStyles } from "../../../../utils";

import "./button.css";

export interface ButtonProps {
  value?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  wrapperClassName?: string;
  borderRadius?: string;
  disabled?: boolean;
  secondary?: boolean;
  backgroundColor?: string;
  color?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  children?: any;
}

const Button = (props: ButtonProps) => {
  const {
    value,
    type = "button",
    className,
    wrapperClassName,
    disabled = false,
    secondary = false,
    borderRadius,
    backgroundColor,
    color,
    onClick,
    fullWidth,
    children,
    ...otherProps
  } = props;
  const [rootStyles, setRootStyles] = useState<React.CSSProperties>({});
  const [buttonClasses, setButtonClasses] = useState(["button"]);

  useEffect(() => {
    const newStyles: React.CSSProperties = getNewStyles({
      ...rootStyles,
      borderRadius,
      fullWidth,
      backgroundColor,
      color,
    });

    setRootStyles(newStyles);
  }, [borderRadius, fullWidth, backgroundColor, color]);

  useEffect(() => {
    const newButtonClasses = ["button"];

    if (wrapperClassName) {
      newButtonClasses.push(wrapperClassName);
    }

    if (secondary) {
      newButtonClasses.push("secondary-button");
    } else {
      newButtonClasses.push("primary-button");
    }

    if (className) {
      newButtonClasses.push(className);
    }

    setButtonClasses(newButtonClasses);
  }, [className, secondary]);

  return (
    <div className={wrapperClassName ? wrapperClassName : ""}>
      <button
        onClick={onClick}
        style={rootStyles}
        disabled={disabled}
        className={buttonClasses.join(" ")}
        type={type}
        {...otherProps}
      >
        {value ? value : children}
      </button>
    </div>
  );
};

export default Button;

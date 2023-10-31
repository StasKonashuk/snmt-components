import React, { useEffect, useState } from "react";

import "./button.css";

interface ButtonProps {
  value: string;
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
    ...otherProps
  } = props;
  const [rootStyles, setRootStyles] = useState<React.CSSProperties>({});
  const [buttonClasses, setButtonClasses] = useState(["button"]);

  useEffect(() => {
    const newStyles: React.CSSProperties = { ...rootStyles };
    if (borderRadius) newStyles.borderRadius = borderRadius;

    if (fullWidth) newStyles.width = "100%";

    if (backgroundColor) newStyles.background = `${backgroundColor}`;

    if (color) newStyles.color = `${color}`;

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

    setButtonClasses(newButtonClasses);
  }, [className, secondary]);

  console.log();
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
        {value}
      </button>
    </div>
  );
};

export default Button;

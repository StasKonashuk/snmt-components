import React, { ChangeEvent, useEffect, useRef, useState } from "react";
("use strict");

import "./input.css";

interface InputProps {
  value?: string;
  name?: string;
  defaultValue?: string;
  className?: string;
  placeholder?: string;
  wrapperClassName?: string;
  borderRadius?: string;
  disabled?: boolean;
  secondary?: boolean;
  width?: string;
  height?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isError?: boolean;
  errorMsg?: string;
  multiline?: boolean;
  focused?: boolean;
}

const Input = (props: InputProps) => {
  const {
    value = "",
    defaultValue = "",
    name = "",
    className,
    wrapperClassName,
    disabled = false,
    secondary = false,
    borderRadius,
    onChange,
    isError = false,
    errorMsg = "",
    placeholder = "",
    onFocus,
    onBlur,
    focused,
    multiline,
    width,
    height,
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  const [inputWidth, setInputWidth] = useState(0);
  const [textAreaWidth, setTextAreaWidth] = useState(0);
  const [labelWidth, setLabelWidth] = useState(0);
  const [errorsWrapperStyles, setErrorsWrapperStyles] =
    useState<React.CSSProperties>({});
  const [rootStyles, setRootStyles] = useState<React.CSSProperties>({});
  const [inputClasses, setInputClasses] = useState(["input"]);
  const [wrapperClasses, setWrapperClasses] = useState(["wrapper"]);
  const [focusedValue, setFocusedValue] = useState(focused);
  const [inputLabelClasses, setInputLabelClasses] = useState(["input-label"]);
  const [labelFocusedWrapperStyles, setLabelFocusedWrapperStyles] =
    useState<React.CSSProperties>({});

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.offsetWidth);
    }
  }, [inputRef]);

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth + 2);
    }
  }, [labelRef, focused, name]);

  useEffect(() => {
    if (textAreaRef.current) {
      setTextAreaWidth(textAreaRef.current.offsetWidth);

      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [textAreaRef, value]);

  useEffect(() => {
    if (inputWidth) {
      const newStyles: React.CSSProperties = {
        ...errorsWrapperStyles,
        width: `${inputWidth}px`,
      };
      setErrorsWrapperStyles(newStyles);
    } else if (textAreaWidth) {
      const newStyles: React.CSSProperties = {
        ...errorsWrapperStyles,
        width: `${textAreaWidth}px`,
      };
      setErrorsWrapperStyles(newStyles);
    }
  }, [inputWidth, textAreaWidth]);

  useEffect(() => {
    if (labelWidth) {
      const newStyles: React.CSSProperties = {
        ...errorsWrapperStyles,
        width: `${labelWidth}px`,
      };

      setLabelFocusedWrapperStyles(newStyles);
    }
  }, [labelWidth, focused, name]);

  useEffect(() => {
    const newClasses = ["input"];

    if (className) {
      newClasses.push(className);
    }

    if (secondary) {
      newClasses.push("secondary-input");
    } else {
      newClasses.push("primary-input");
    }

    if (isError) {
      newClasses.push("error");
    }

    setInputClasses(newClasses);
  }, [className, secondary, isError]);

  useEffect(() => {
    if (borderRadius) {
      setRootStyles((prev) => {
        return { ...prev, borderRadius };
      });
    }

    if (width) {
      setRootStyles((prev) => {
        return { ...prev, width };
      });
    }

    if (height) {
      setRootStyles((prev) => {
        return { ...prev, height };
      });
    }
  }, [borderRadius, width, height]);

  useEffect(() => {
    const newWrapperClasses = ["wrapper"];

    if (wrapperClassName) {
      newWrapperClasses.push(wrapperClassName);
    }

    setWrapperClasses(newWrapperClasses);
  }, [wrapperClassName]);

  useEffect(() => {
    const newInputLabelClasses = ["input-label"];

    if (focusedValue || value.length) {
      const newLabelWrapperStyles: React.CSSProperties = {
        ...labelFocusedWrapperStyles,
      };

      setLabelFocusedWrapperStyles(newLabelWrapperStyles);

      newInputLabelClasses.push("input-label-focused");
    }

    setInputLabelClasses(newInputLabelClasses);
  }, [focusedValue, value]);

  const onFocusHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusedValue(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocusedValue(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={wrapperClasses.join(" ")}>
      {name && (
        <label
          ref={labelRef}
          htmlFor="inputField"
          className={inputLabelClasses.join(" ")}
        >
          {name}
        </label>
      )}
      {multiline ? (
        <textarea
          ref={textAreaRef}
          onChange={onChange}
          style={rootStyles}
          disabled={disabled}
          className={inputClasses.join(" ")}
          value={value}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          placeholder={name ? "" : placeholder}
          {...otherProps}
        />
      ) : (
        <input
          ref={inputRef}
          onChange={onChange}
          style={rootStyles}
          disabled={disabled}
          className={inputClasses.join(" ")}
          value={value}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          placeholder={name ? "" : placeholder}
          {...otherProps}
        />
      )}

      {isError && errorMsg && (
        <div style={errorsWrapperStyles} className="error-wrapper">
          <p className="error-text">{errorMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Input;

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
("use strict");

import "./select.css";

interface SelectProps {
  value?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  wrapperClassName?: string;
  borderRadius?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLSelectElement>) => void;
  isError?: boolean;
  errorMsg?: string;
  focused?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

const Select = (props: SelectProps) => {
  const {
    value = "",
    name = "",
    className,
    wrapperClassName,
    disabled = false,
    borderRadius,
    onChange,
    isError = false,
    errorMsg = "",
    placeholder = "",
    onFocus,
    onBlur,
    focused,
    width,
    height,
    options,
    ...otherProps
  } = props;
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);

  const [selectWidth, setSelectWidth] = useState(0);
  const [errorsWrapperStyles, setErrorsWrapperStyles] =
    useState<React.CSSProperties>({});
  const [rootStyles, setRootStyles] = useState<React.CSSProperties>({});
  const [selectClasses, setSelectClasses] = useState(["select"]);
  const [wrapperClasses, setWrapperClasses] = useState(["wrapper"]);

  useEffect(() => {
    if (selectRef.current) {
      setSelectWidth(selectRef.current.offsetWidth);
    }
  }, [selectRef]);

  useEffect(() => {
    if (selectWidth) {
      setErrorsWrapperStyles((prev) => {
        return {
          ...prev,
          width: `${selectWidth}px`,
        };
      });
    }
  }, [selectWidth]);

  useEffect(() => {
    const newClasses = ["select"];

    if (className) {
      newClasses.push(className);
    }

    if (isError) {
      newClasses.push("error");
    }

    setSelectClasses(newClasses);
  }, [className, isError]);

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

  const onFocusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={wrapperClasses.join(" ")}>
      {name && (
        <label ref={labelRef} htmlFor="select" className="select-label">
          {name}
        </label>
      )}

      <select
        id="select"
        name="select"
        ref={selectRef}
        style={rootStyles}
        value={value}
        className={selectClasses.join(" ")}
        disabled={disabled}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChange}
        placeholder={name ? "" : placeholder}
        {...otherProps}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            style={{ height: "40px" }}
            key={option.value}
            value={option.value}
          >
            <div className="select-option">{option.label}</div>
          </option>
        ))}
      </select>

      {isError && errorMsg && (
        <div style={errorsWrapperStyles} className="error-wrapper">
          <p className="error-text">{errorMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Select;

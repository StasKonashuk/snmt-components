import React from "react";

export const getNewStyles = (styles: any) => {
  const newStyles: any = {};

  for (const [key, value] of Object.entries(styles)) {
    if (value) {
      if (key === "fullWidth") {
        newStyles.width = "100%";
        continue;
      }

      if (key === "backgroundColor") {
        newStyles.background = `${value}`;
        continue;
      }

      if (key === "color") {
        newStyles.color = `${value}`;
        continue;
      }

      if (value) {
        newStyles[key] = value;
      }
    }
  }

  return newStyles;
};

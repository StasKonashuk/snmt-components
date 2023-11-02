import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from "../../../button/src";

import "./icon-button.css";

interface IconButtonProps extends ButtonProps {}

const IconButton = (props: IconButtonProps) => {
  const { wrapperClassName, children, value, ...otherProps } = props;

  return (
    <div className={wrapperClassName ? wrapperClassName : ""}>
      <Button className="icon-button" {...otherProps}>
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </Button>
    </div>
  );
};

export default IconButton;

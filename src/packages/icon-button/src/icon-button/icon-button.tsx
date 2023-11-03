import React, { useEffect, useState } from "react";
//@ts-ignore
import { Button, ButtonProps } from "snmt-button";

import "./icon-button.css";

interface IconButtonProps extends ButtonProps {}

const IconButton = (props: IconButtonProps) => {
  //@ts-ignore
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

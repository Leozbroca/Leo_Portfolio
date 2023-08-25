import React, { useState } from "react";
import { Main } from "./styled";

const ResponsiveHeader = () => {
    
    const [hasClick, setHasClick] = useState(false);

  const handleClick = () => {
    if(hasClick == true){
      setHasClick(false);
    } else {
      setHasClick(true);
    }
  }

  return (
    <Main
      className={
        hasClick
          ? "hamburger hamburger--emphatic active"
          : "hamburger hamburger--emphatic"
      }
      type="button"
      hasClick={hasClick}
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Main>
  );
};

export default ResponsiveHeader;

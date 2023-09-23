import React, { useState } from "react";
import GlobalContextState from "./GlobalContextState";

const GlobalState = (props) => {
  const [toasty, setToasty] = useState(false);
  const [errToasty, setErrToasty] = useState(false);

  return (
    <GlobalContextState.Provider value={{
        toasty,
        setToasty,
        errToasty,
        setErrToasty
    }}>
      {props.children}
    </GlobalContextState.Provider>
  );
};

export default GlobalState;

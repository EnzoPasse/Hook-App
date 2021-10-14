import React, { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [state, setState] = useState(10);

  /* const increment = () => {
    setState ( state + 1 );
} */

  const increment = useCallback((incre) => {
    //setState( state + 1 )
    setState(c => c + incre);
  }, [setState]);


  return (
    <>
      <h1> useCallBack: {state} </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};

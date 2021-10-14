import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWhitCustomHook = () => {
  const { state, increment, decrement,reset } = useCounter();

  return (
    <>
      <h1> Conter Whit Hook: {state}</h1>
      <hr />

      <button type="button" className="btn btn-primary" onClick={increment}>
        + 1
      </button>

      <button type="button" 
              className="btn btn-primary"
              onClick= {reset}>
        reset
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decrement(2)}
      >
        - 2
      </button>
    </>
  );
};

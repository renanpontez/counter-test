import React from "react";
import useCounter from "./useCounter";

function ShowCounter() {
  const { counter, changeCounter } = useCounter(0, 1000);

  return (
    <div>
      <button onClick={() => changeCounter(-1)}>-</button>
      <p data-testid="counter-value">{counter}</p>
      <button onClick={() => changeCounter(1)}>+</button>
    </div>
  );
}

export default ShowCounter;

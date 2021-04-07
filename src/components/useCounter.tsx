import React from "react";

const useCounter = (minValue: number, maxValue: number) => {
  const [counter, setCounter] = React.useState<number>(0);
  const changeCounter = React.useCallback(
    (change: number) => {
      if (change === -1 && counter > minValue) {
        setCounter(counter - 1);
      }

      if (change === 1 && counter < maxValue) {
        setCounter(counter + 1);
      }
    },
    [counter, minValue, maxValue]
  );

  return {
    counter,
    changeCounter
  };
};

export default useCounter;

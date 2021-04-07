import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("useCounter hook", () => {
  it("should be able to count up", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0);

    act(() => {
      result.current.changeCounter(1);
    });

    expect(result.current.counter).toBe(1);
  });

  it("should be able to count down", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0);

    act(() => {
      result.current.changeCounter(1);
      result.current.changeCounter(-1);
    });

    expect(result.current.counter).toBe(0);
  });
  it("should not exceed upper limit", () => {
    const MAX_LIMIT = 1;
    const { result } = renderHook(useCounter);

    act(() => {
      for (let i = 0; i <= MAX_LIMIT; i++) {
        result.current.changeCounter(1);
      }
    });

    expect(result.current.counter).not.toBeGreaterThan(MAX_LIMIT);
  });
  it("should not exceed lower limit", () => {
    const MIN_LIMIT = -1;
    const { result } = renderHook(useCounter);

    act(() => {
      for (let i = 0; i >= MIN_LIMIT; i--) {
        result.current.changeCounter(-1);
      }
    });

    expect(result.current.counter).not.toBeLessThan(MIN_LIMIT);
  });
});

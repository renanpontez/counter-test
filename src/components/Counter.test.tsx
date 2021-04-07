import * as React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter", () => {
  it("should render correctly", () => {
    render(<Counter />);

    //should have two buttons (+ and -)
    //and a text with a value
    expect(screen.getByRole("button")).toHaveLength(2);
    expect(screen.getByText("-")).toHaveLength(1);
    expect(screen.getByText("+")).toHaveLength(1);
    expect(screen.getByTestId("counter-value")).toHaveLength(1);
  });
});

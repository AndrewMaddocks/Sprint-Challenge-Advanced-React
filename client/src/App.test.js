import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import DisplayData from "./components/DisplayData";

test("App renders without crashing", () => {
  render(<App />);
});

test("renders Display component", () => {
  const wrapper = render(<DisplayData />);
  wrapper.getByText(/world/i);
});
test("DisplayData renders without crashing", () => {
  render(<DisplayData />);
});

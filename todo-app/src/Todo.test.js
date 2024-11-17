import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

// Smoke test
it("renders without crashing", function () {
render (<Todo/>);
});

// Snapshot test 
it("matches snapshot", function () {
  const {asFragment} = render(<Todo/>);
  expect(asFragment()).toMatchSnapshot();
});

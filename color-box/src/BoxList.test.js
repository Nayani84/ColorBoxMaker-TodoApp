import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke test
it("renders without crashing", function () {
    render(<BoxList />);
});

// Snapshot test 
it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


it("should add new box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);

    const backgroundInput = getByLabelText("Background Color :");
    const widthInput = getByLabelText("Width :");
    const heightInput = getByLabelText("Height :");
    const btn = queryByText("Add Box");

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(backgroundInput, { target: { value: 'red' } });
    fireEvent.change(widthInput, { target: { value: '100px' } });
    fireEvent.change(heightInput, { target: { value: '100px' } });
    fireEvent.click(btn);

    expect(queryByText('X')).toBeInTheDocument();
});

it("should remove box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);

    const backgroundInput = getByLabelText("Background Color :");
    const widthInput = getByLabelText("Width :");
    const heightInput = getByLabelText("Height :");
    const btn = queryByText("Add Box");

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(backgroundInput, { target: { value: 'yellow' } });
    fireEvent.change(widthInput, { target: { value: '150px' } });
    fireEvent.change(heightInput, { target: { value: '150px' } });
    fireEvent.click(btn);

    const removeButton = queryByText("X");
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
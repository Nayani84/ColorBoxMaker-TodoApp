import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () {
    render(<NewBoxForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function () {
    const createMock = jest.fn();
    const { queryByText, getByLabelText } = render(<NewBoxForm addBox={createMock} />);
    
    const backgroundInput = getByLabelText("Background Color :");
    const widthInput = getByLabelText("Width :");
    const heightInput = getByLabelText("Height :");
    const btn = queryByText("Add Box");

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(backgroundInput, { target: { value: 'red' } });
    fireEvent.change(widthInput, { target: { value: '100px' } });
    fireEvent.change(heightInput, { target: { value: '100px' } });
    fireEvent.click(btn);

    expect(createMock).toHaveBeenCalled();
});

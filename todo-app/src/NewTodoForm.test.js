import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function () {
    render(<NewTodoForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on form submit", function () {
    const createMock = jest.fn();
    const { getByText, getByLabelText } = render(<NewTodoForm addTodo={createMock} />);

    const input = getByLabelText("Task :");
    fireEvent.change(input, { target: { value: "Test Task" } });

    const addBtn = getByText("Add Task");
    fireEvent.click(addBtn);
    expect(createMock).toHaveBeenCalled();
});

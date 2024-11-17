import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke test
it("renders without crashing", function () {
    render(<TodoList />);
});

// Snapshot test 
it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


it("should add new task", function () {
    const { queryByText, getByLabelText } = render(<TodoList/>);

    const input = getByLabelText("Task :");
    const btn = queryByText("Add Task");

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(btn);

    expect(queryByText('X')).toBeInTheDocument();
    expect(queryByText("Test todo")).toBeInTheDocument();
});

it("should update task", function () {
    const { queryByText, getByLabelText, getByDisplayValue, getByRole } = render(<TodoList/>);

    const input = getByLabelText("Task :");
    const btn = queryByText("Add Task");

    expect(queryByText("Edit")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(btn);

    const editButton = queryByText("Edit");
    expect(editButton).toBeInTheDocument();
    expect(queryByText("Test Task")).toBeInTheDocument();
    fireEvent.click(editButton);

    
    const editInput = getByDisplayValue("Test Task");
    fireEvent.change(editInput, { target: { value: "Updated task" } });
    const saveButton = queryByText("Save"); 
    fireEvent.click(saveButton);

    expect(queryByText("Updated task")).toBeInTheDocument();
    expect(queryByText("Test Task")).not.toBeInTheDocument();
});

it("should remove task", function () {
    const { queryByText, getByLabelText } = render(<TodoList/>);

    const input = getByLabelText("Task :");
    const btn = queryByText("Add Task");

    expect(queryByText("X")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Test todo" } });
    fireEvent.click(btn);

    const removeButton = queryByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(queryByText("Test todo")).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
    expect(queryByText("Test todo")).not.toBeInTheDocument();
});
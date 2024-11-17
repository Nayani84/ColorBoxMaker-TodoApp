import React, { useState } from "react";
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = () => {
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (task) => {
        setTodos(todos => [...todos, task]);
    };

    const updateTodo = (id, editTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, task: editTask } : todo));
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };


    return (
        <div className="Todo-list">
            <NewTodoForm addTodo={addTodo} />
            <div className="Todo-container">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
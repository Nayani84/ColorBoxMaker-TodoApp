import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import './NewTodoForm.css';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.task.trim()) return;
        addTodo({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="New-todo-form" onSubmit={handleSubmit}>
            <label htmlFor="task">Task :</label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.task}
                onChange={handleChange}
            />

            <button>Add Task</button>
        </form>
    );
}

export default NewTodoForm;



import React, { useState } from "react";
import './Todo.css';

const Todo = ({ id, task, updateTodo, removeTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    }
    return (
        <div className="Todo">
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        value={editTask}
                        onChange={(e) => setEditTask(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    <span> {task} </span>
                    <div className="btns">
                        <button className="Edit-btn" onClick={() => setIsEditing(true)}>Edit</button> 
                        <button className="Remove-btn" onClick={() => removeTodo(id)}>X</button>
                    </div>

                </>
            )}
        </div>
    );
}

export default Todo;
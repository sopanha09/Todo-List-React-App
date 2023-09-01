import React, { useState } from "react";

const EditTodoForm = ({editTodo, task}) => {
    const [newTodos, setNewTodos] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(newTodos, task.id);
    }

    return (
        <form
            className="TodoForm" 
            onSubmit={handleSubmit}
        >
        <input 
            className="todo-input"
            type="text" 
            placeholder="Update Task"
            value={newTodos}
            onChange={(e) => setNewTodos(e.target.value)}/>
            <button className="todo-btn" type="submit">Update</button>
        </form>
    )
}

export default EditTodoForm;
import React, { useState } from "react";
import { TfiWrite } from 'react-icons/tfi';

function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { 
                text: newTodo.trim(), 
                checked: false 
            }]);
            setNewTodo("");
        }
    };

    return (
        <div>
            <h1>Today's Task <TfiWrite /></h1>
            <div className="todo-form">
                <input
                    type="text" 
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default TodoList;
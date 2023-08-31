import React from "react";
import { BiTrash } from "react-icons/bi";

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    return (
        <div className="Todo">
            <p className={`${task.comleted ? 'complete' : ""}`} onClick={()=> toggleComplete(task.id)}>{task.task}</p>
            <div>
                < BiTrash onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};


export default Todo;
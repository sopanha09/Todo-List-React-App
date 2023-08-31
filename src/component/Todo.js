import React from "react";

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    return (
        <div className="Todo">
            <p className={`${task.comleted ? 'complete' : ""}`} onClick={()=> toggleComplete(task.id)}>{task.task}</p>
        </div>
    );
};


export default Todo;
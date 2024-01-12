import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

const Todo = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
  formattedDate,
  currentTime,
}) => {
  const [preferences, setPreferences] = useState({ task1: false });

  function handleCheckBox(taskId) {
    preferences[taskId] = !preferences[taskId];
    setPreferences({ ...preferences });
  }

  return (
    <div className="Todo">
        <div className="container">
            <p className={`${task.completed ? 'complete' : ""}`} 
            onClick={()=> toggleComplete(task.id)}
            style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.5 : 1,
            }}
            >
            <span 
                className="icon-checkbox"
                onClick={() => handleCheckBox('task1')}>
                {preferences['task1'] ? (
                    < MdCheckCircleOutline />
                ) : (
                    < MdOutlineRadioButtonUnchecked />
                )}
            </span>
            </p>
        </div>
        <div style={{display: "flex", flexDirection: "row", gap: "5rem"}} >
        <div
            style={{
                textDecoration: task.completed ? "line-through" : "none",
            }}> 
            <div
            style={{
                textDecoration: task.completed ? "line-through" : "none",
            }}> 
            <div  >{task.task}</div>
        </div>
            <div className="date-time"
            style={{
                opacity: task.completed ? 0.5 : 1,
            }}>
                Created {formattedDate} @{currentTime}
            </div>
        </div>
        <div className="edit-delete">
                < FiEdit className="btn" onClick={() => editTodo(task.id)} />
                < BiTrash onClick={() => deleteTodo(task.id)} />
        </div>
        </div>
    </div>

  );
};

export default Todo;

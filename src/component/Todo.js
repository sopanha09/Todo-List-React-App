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
    <div
      className="Todo"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div>
        <div
          className={`${task.completed ? "complete" : ""}`}
          onClick={() => toggleComplete(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            display: "flex",
            flexDirection: "row",
            gap: "1em",
          }}
        >
          <div className="container" onClick={() => handleCheckBox("task1")}>
            {preferences["task1"] ? (
              <MdCheckCircleOutline />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
          </div>
          <div
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              opacity: task.completed ? 0.5 : 1,
            }}
          >
            <div>{task.task}</div>
            <div className="date-time">
              Created {formattedDate} @{currentTime}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5em",
          }}
        >
          <div>
            <FiEdit onClick={() => editTodo(task.id)} />
          </div>
          <div>
            <BiTrash onClick={() => deleteTodo(task.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

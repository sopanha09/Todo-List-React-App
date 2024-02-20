import { useState } from "react";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../api/todoApi";
import { Form } from "react-bootstrap";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [title, setTitle] = useState("");
  const [editingTodo, setEditingTodo] = useState("");
  const { data: todos, refetch, isLoading, isError } = useGetTodosQuery();
  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  console.log("todos", todos);

  const handleAddTodo = async () => {
    try {
      await createTodo({
        userId: 1,
        title: newTodo,
        completed: false,
      }).unwrap();
      setNewTodo("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (newTodo) => {
    createTodo(newTodo);
  };

  const starEditTodo = async (todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
  };

  const updateTitle = async () => {
    if (editingTodo) {
      try {
        await updateTodo({ ...editingTodo, title }).unwrap();
        setEditingTodo(null); // Set editingTodo to null to indicate editing is finished
        setTitle(""); // Reset the title state
        refetch();
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (isError) {
    <p>Error....</p>;
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          className="newTodo"
          placeholder=" Add new task..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="btn-update" onClick={handleAddTodo}>
          <img src="/upload.svg" alt="Upload" />
        </button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {editingTodo && editingTodo.id === todo.id ? (
              <>
                <form
                  className="update-todo"
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateTitle();
                  }}
                >
                  <input
                    type="text"
                    value={title}
                    placeholder="Update task..."
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button className="btn-update " type="submit">
                    <img src="/upload.svg" alt="Upload" />
                  </button>
                </form>
              </>
            ) : (
              <div className="main-todo">
                <div className="text-todo ">
                  <Form.Check
                    type="checkbox"
                    checked={todo.completed}
                    id={todo.id}
                    onChange={() =>
                      updateTodo({ ...todo, completed: !todo.completed })
                    }
                  />
                  <p>{todo.title}</p>
                </div>
                <div>
                  <button
                    className="todo-btn"
                    onClick={() => starEditTodo(todo)}
                  >
                    <img src="/pencil-square.svg" alt="Pencil-Square" />
                  </button>
                  <button
                    className="todo-btn"
                    variant="danger"
                    onClick={() => deleteTodo({ id: todo.id })}
                  >
                    <img src="/trash.svg" alt="Trash" />
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

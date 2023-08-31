import React, {useState, useEffect} from 'react'
import { TfiWrite } from "react-icons/tfi";
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

const TodoLocalStorage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const toggleComplete = id => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const editTodo = id => {
        setTodos(
            todos.map((todo) => 
              todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo)
        );
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) => 
              todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo 
            )
          );
    }
  return (
    <div className='TodoWrapper'>
        <h1>Today's Task < TfiWrite /></h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
            
        ))}
         
    </div>
  )
}

export default TodoLocalStorage;
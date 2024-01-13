import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <div className='todo-form' >
      <form onSubmit={handleSubmit} className="TodoForm">
        <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="todo-input" 
        placeholder='What do you need do?' />
        <button type="submit" className='todo-btn'>Add</button>
      </form>
    </div>
  )
}

import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="app">
      <header>
        <h2>Today's Task</h2>
      </header>
      <TodoList />
    </div>
  );
};

export default App;

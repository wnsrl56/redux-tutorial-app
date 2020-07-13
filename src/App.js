import React from "react";
import AddTodo from "./compositions/TodoList/AddTodo";
import TodoList from "./compositions/TodoList/TodoList";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;

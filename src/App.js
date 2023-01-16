import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import React from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  // console.log(newTodo, setNewTodo);

  function handleNewItem(item) {
    setNewTodo(item);
  }
  return (
    <div style={{ textAlign: "App" }}>
      <h1> Todo List </h1>

      <AddTodoForm onAddnewTodo={handleNewItem} />
      <p> {newTodo} </p>

      <TodoList />

      {/* <hr />
      <ul>
        {todoList.map(function (item) {
          return <li key={item.ObjectID}>{item.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default App;

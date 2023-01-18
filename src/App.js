import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import React from "react";

function App() {
  // const [newTodo, setNewTodo] = useState("");
  // console.log(newTodo, setNewTodo);

  const [todoList, setTodoList] = useState([]);


  function handleNewItem(item) {
    setTodoList(item);
  }

  return (
    <div style={{ textAlign: "App" }}>
      <h1> Todo List </h1>

      <AddTodoForm onAddnewTodo={handleNewItem} />
      <TodoList todoList={todoList} />
      {/* <p> {newTodo} </p> */}

      {/* <TodoList /> */}

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

import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import React from "react";

function App() {
  // const [newTodo, setNewTodo] = useState("");
  // console.log(newTodo, setNewTodo);

  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    console.log(todoList)
    setTodoList([...todoList, newTodo]);
  };

  // function handleNewItem(item) {
  //   setTodoList(item);
  // }
console.log(todoList)
  return (
    <div style={{ textAlign: "App" }}>
      <h1> Todo List </h1>
      {/* <AddTodoForm onAddTodo={handleNewItem} /> */}

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
      {/* <p> {newTodo} </p> */}

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



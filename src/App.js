/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div style={{ textAlign: "App" }}>
      <h1> Todo List </h1>
      <AddTodoForm />
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

// let todoList = [
//   { title: "Complete assignment", ObjectID: 1 },
//   {
//     title: "Complete assignment",
//     ObjectID: 2,
//   },
//   {
//     title: "Complete assignment",
//     ObjectID: 3,
//   },
// ];

// function AddTodoForm() {}

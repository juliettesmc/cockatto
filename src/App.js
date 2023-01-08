/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

let todoList = [
  { title: "Complete assignment", ObjectID: 1 },
  {
    title: "Complete assignment",
    ObjectID: 2,
  },
  {
    title: "Complete assignment",
    ObjectID: 3,
  },
];

function App() {
  return (
    <div style={{ textAlign: " " }}>
      <h1> Todo List </h1>

      <hr />
      <ul>
        {todoList.map(function (item) {
          return <li key={item.ObjectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

// se encuentra en la primera lesson

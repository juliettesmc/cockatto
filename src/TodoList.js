// import {react} from 'react'

function TodoList() {
  const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Complete assignment" },
    { id: 3, title: "Complete assignment" },
  ];

  return (
    <>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoList;

// JavaScript

// JSX = Extensible JavaScript

// HTML const myVar = 22

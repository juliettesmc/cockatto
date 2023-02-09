import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

// import React from "react";


function useSemiPersistentState() {
  // console.log(JSON.parse(localStorage.getItem("todoList")))
  const TodoList = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
  
  const [todoList, setTodoList] = useState(
   TodoList
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]); //dependent lo que hace es buscar.
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log(todoList)
  };

  const removeTodo = (id) => {
    const filteredArray = todoList.filter((todo, index) => {
      return todo.id !== id;
    });

    setTodoList(filteredArray);
  };


  return (
    <>
      <h1> Todo List </h1>
      <AddTodoForm onAddTodo={addTodo} />  
       {/* agregandp el addtoodo pasansolo como props  */}
      
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
       {/* pasar removeTodo como accesorio de controlador de devolucion de llamadas */}
    </>
  );
}

export default App;
// <> fragmentos.

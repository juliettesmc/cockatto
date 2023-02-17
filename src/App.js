import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import React from "react";

function App() {

const [todoList, setTodoList] = useState(
  localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : []
  // cuando tiene mayusculas son componentes y minsculas variables,state
);

const [isLoading,setIsLoading]=useState(true);

useEffect(() => {
  new Promise ((resolve, reject) => {
    
  setTimeout(()=>{ //establece un temporizador que ejecuta una función o una pieza de código 
    resolve({
      data:{
       todoList:
    JSON.parse(localStorage.getItem("todoList")),
             },
           });
           console.log('2 second has passed')
         }, 2000); //tiempo de retardo
          }
      ).then((result) => { //método de un Promiseobjeto toma hasta dos argumentos: funciones de devolución de llamada para los casos cumplidos y rechazados del Promise
      console.log(result)
      setTodoList([...result.data.todoList])
      setIsLoading(false); 
      console.log(result);
  });
}, []);


useEffect(() => {

// if (isLoading) {
//  return <p>'Loading...'</p>
// } else {
//   return todoList
// }

  localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList,isLoading]); //dependent lo que hace es buscar.

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


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

useEffect(() => {
  const Promise =( (resolve, reject) => {
setTimeout(function(){
  // ()=>resolve({data:{JSON.parse(localStorage.getItem('todoList'))}})
console.log ('2 second has passed')
},2000)
Promise.then(result=>{
this.setState({todoList:result});
})

  .then(resolve=>resolve.JSON.parse(localStorage.getItem("todoList")))
  .then(data=>console.log(data))
   })
   
},[])
// debajo del todoList estado, definir un nuevo useEffect gancho 
// react con una list de dependencias vacia.
useEffect(() => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}, [todoList]); //dependent lo que hace es buscar.
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

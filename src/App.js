import React, { useState, useEffect } from "react";
// import React, { useState } from "react";
// import {TodoList} from "./TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./TodoListItem.module.css";

function App() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoList")
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
    // cuando tiene mayusculas son componentes y minsculas variables,state
  );

  const [isLoading, setIsLoading] = useState(true);
  console.log(process.env);
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=jsmc&sort[0][field]=Title&sort[0][direction]=asc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
    
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.records);
        //  result.records.sort((objA,objB) => ( -1 > 1 ? 0:1 ));
        result.records.sort((objA, objB) => {
          if (objA.fields.Title < objB.fields.Title) {
            return 1;
          } else if (objA.fields.Title > objB.fields.Title) {
            return -1;
          } else {
            return 0;
          }
        });
        setTodoList([...result.records]); //result es mi variable
        setIsLoading(false);
        console.log(result.records);
      })
      .catch((error) => {
        console.error(error);
      });

    // new Promise ((resolve, reject) => {
    // setTimeout(()=>{ //establece un temporizador que ejecuta una función o una pieza de código
    //   resolve({
    //     data:{
    //      todoList:
    //   JSON.parse(localStorage.getItem("todoList")),
    //            },
    //          });
    //          console.log('2 second has passed')
    //        }, 2000); //tiempo de retardo
    //         }
    //     ).then((result) => { //método de un Promiseobjeto toma hasta dos argumentos: funciones de devolución de llamada para los casos cumplidos y rechazados del Promise
    //     console.log(result)
    //     setTodoList([...result.data.todoList])
    //     setIsLoading(false);
    //     // isLoading(false);
    //     console.log(result);
    // });
  }, []);

  useEffect(() => {
    if (isLoading) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); //dependent lo que hace es buscar.

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
  };

  const removeTodo = (id) => {
    const filteredArray = todoList.filter((todo, index) => {
      return todo.id !== id;
    });

    setTodoList(filteredArray);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={style.imagen}>
              <h1 className={style.title}> Todo List </h1>
              <h1 className={style.header}> New Todo List </h1>

              <AddTodoForm onAddTodo={addTodo} />
              {/* agregandp el addtoodo pasansolo como props  */}

              {isLoading ? (
                "Loading"
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />
        <Route exact path="/new" element={<h1> Todo List </h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

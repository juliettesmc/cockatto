import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "../TodoListItem.module.css";
import PropTypes from 'prop-types'

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");

  const propTypes= {
    onAddTodo:PropTypes.func  
  }
  console.log(propTypes);
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    // console.log(newTodoTitle);para mirarlos en mi console.log
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    props.onAddTodo({ title: todoTitle, id: Date.now() });
    // props.onAddTodo(event.target[0].value);
    setTodoTitle(""); //this resets the input after hitting submit
    // setTodoTitle(newTodoTitle);
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        {" "}
        Title{" "}
      </InputWithLabel>

      <button className={style.sub} type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

// function handleAddTodo(event) {
//   props.onAddTodo({ title: todoTitle, id: Date.now() });
//   event.preventDefault();
//   setTodoTitle(event.currentTarget.value);
//   console.log(event.target[0].value);
//   setTodoTitle("");
// }

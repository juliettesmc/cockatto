import React, { useState } from "react";
function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    // console.log(newTodoTitle);para mirarlos en mi console.log
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo({ title: todoTitle, id: Date.now() });
    // props.onAddTodo(event.target[0].value);
    setTodoTitle(""); //this resets the input after hitting submit
    // setTodoTitle(newTodoTitle);
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label>
        Title:
        <input
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        {/* <input type="submit" value="Add to List" /> */}
        <button type="submit">Add</button>
      </label>
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

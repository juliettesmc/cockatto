import React, { useState } from "react";
function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState({});

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  function handleAddTodo(event) {
    props.onAddtodo({ title: todoTitle, id: Date.now() });
    event.preventDefault();
    setTodoTitle(event.currentTarget.value);
    console.log(event.target[0].value);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label>
        Title:
        <input
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={(event) => handleTitleChange(event)}
        />
        <button type="submit">Add</button>
      </label>
    </form>
  );
}

export default AddTodoForm;

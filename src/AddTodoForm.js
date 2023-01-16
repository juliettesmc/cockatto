function AddTodoForm(props) {
  function handleAddTodo(event) {
    props.onAddnewTodo(event.target[0].value);
    event.preventDefault();

    console.log(event.target[0].value);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label>
        Title:
        {/* <input type="text" value={name} onChange={(e) => handleAddTodo(e)} /> */}
        <input id="todoTitle" name="title" />
        <button type="submit">Add</button>
      </label>
    </form>
  );
}
export default AddTodoForm;

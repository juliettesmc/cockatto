import TodoListItem from "./TodoListItem";

function TodoList(props) {
  // const todoList = [
  //   { id: 1, title: "Wash the dishes" },
  //   { id: 2, title: "Buy groceries" },
  //   { id: 3, title: "Make the lunch" },
  // ];

  return (
    <>
      <ul>
        {props.todoList.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo.title} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;

import TodoListItem from "./TodoListItem";
import PropTypes from 'prop-types'

function TodoList(props) {
  // const todoList = [
  //   { id: 1, title: "Wash the dishes" },
  //   { id: 2, title: "Buy groceries" },
  //   { id: 3, title: "Make the lunch" },
  // ];

  const propTypes= {
    onAddTodo:PropTypes.func
    
  }
  console.log(propTypes);

  return (
    <>
      <ul>
        {/* {props.todoList.map((todo) => {
          return <TodoListItem key={todo.id} todo={todo.title} />;
          
        })} */}
        {
          props.todoList.map((item) => (
            <TodoListItem
              item={item}
              key={item.id}
              onRemoveTodo={props.onRemoveTodo}
            />
          ))

          //this will map through the array of items listed
        }
      </ul>
    </>
  );
}

export default TodoList;

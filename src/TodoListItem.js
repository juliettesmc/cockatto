// import {react} from 'react'

import React from "react";

function TodoListItem(props) {
const onRemoveTodo=()=>{
  // props.onRemoveTodo(props.item.id)
}
  return (
  <React.Fragment>
 <li>{props.item.title}
<button onClick= {onRemoveTodo} > Remove </button> </li>
</React.Fragment>
)
}

export default TodoListItem;


// import {react} from 'react'

import React from "react";
import style from "./TodoListItem.module.css";


function TodoListItem(props) {
const onRemoveTodo=()=>{
  props.onRemoveTodo(props.item.id)
}
  return (
  <React.Fragment>
 <li className={style.ListItem}>{props.item.fields.Title}
<button className={style.boton} onClick= {onRemoveTodo} > Remove </button> </li>
</React.Fragment>
)
}

export default TodoListItem;



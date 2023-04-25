// import {react} from 'react'

import React from "react";
import style from "../TodoListItem.module.css";
import PropTypes from 'prop-types'

function TodoListItem(props) {
const onRemoveTodo=()=>{
  props.onRemoveTodo(props.item.id)
}
const propTypes= {
  onAddTodo:PropTypes.func
  
}
console.log(propTypes);

  return (
  <React.Fragment>
 <li className={style.ListItem}>{props.item.fields ? props.item.fields.Title : props.item.title}
<button className={ style.boton} onClick=  { onRemoveTodo} > Remove </ button> </li>
</React.Fragment>
)
}

export default TodoListItem;



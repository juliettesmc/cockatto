import React from "react";
import PropTypes from 'prop-types'


function InputWithLabel(props) {

    const inputRef = React.useRef(); //usar im gancho react para crear una referencia imperativa

    React.useEffect(() => {  //definir con enlace react con una lista de depencia vacia
    inputRef.current.focus();   //llamar dentro de la funcion de controlador de efectos llamar al metodo
    });

    const propTypes= {
        onAddTodo:PropTypes.func
        
      }
      console.log(propTypes);
      
return(
    <React.Fragment>
   
    <label> {props.children}</label>
        <input 
        // autoFocus={props.autoFocus} // lugar de hacer clic en un campo antes de escribir, 
        // pueden comenzar a escribir inmediatamente tan pronto como se carga un formulario. 
          ref={inputRef} // agregar un accesorio con valor en el elemento de entrada
          id="todoTitle"
          name="title"
          value={props.todoTitle}
          onChange={props.handleTitleChange}
        />
    </React.Fragment>
)
}

export default InputWithLabel;
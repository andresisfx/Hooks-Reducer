import React from 'react'
import { useForm } from '../hooks/useForm.js';
export const ToDoAdd = ({onNewToDo}) => {

  const {description, onInputChange, onResetForm} =useForm({
    description: ''
  }); 

  const onsubmit = (event) => {
    event.preventDefault();
    if(description.length <= 1) return;
    const newToDo = {
        id: new Date().getTime(),
        description: description,
        done: false
    }
    onNewToDo(newToDo);
    onResetForm();
  }

  return (
    <form onSubmit={ onsubmit } >
       <input 
                type="text"
                className="form-control"
                placeholder="Agrega algo"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                className="btn btn-outline-primary mt-2"
                  
            >Agregar</button>

    </form>
  )
}

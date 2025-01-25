import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({ toDos = [] , onDeleteToDo}) => {
  return (
    <ul className='list-group'>
    {
        toDos.map( todo => (
           <ToDoItem key={todo.id} todo={todo} onDeleteToDo={onDeleteToDo}/>
        ))
    }
    
    </ul>
  )
}

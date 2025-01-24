import React from 'react'

export const ToDoList = ({ toDos = [] }) => {
  return (
    <ul className='list-group'>
    {
        toDos.map( todo => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
                <span className="align-self-center">Item 1 </span>
                <button className="btn btn-danger">Borrar</button>
            </li>
        ))
    }
    
    </ul>
  )
}

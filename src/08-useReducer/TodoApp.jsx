import React from 'react'
import { useToDo } from '../hooks/useToDo.js';
import { ToDoList } from './ToDoList.jsx';
import { ToDoAdd } from './ToDoAdd.jsx';






export const TodoApp = () => {

    const {toDos,allToDos,pendingTodos, onHandleToDo, onHandleDelete, onToggleToDo}=useToDo();
   
  return (
    <>
     <h1>TodoApp {allToDos}, <small>pendientes {pendingTodos}</small></h1>
     <hr />
     
     <div className="row">
        <div className="col-7">
           <ToDoList toDos={toDos} onDeleteToDo={onHandleDelete} onToggleToDo={onToggleToDo}/>
        </div>
        <div className="col-5">
            <hr />
            <h4>Agregar TODO</h4>
            <hr />
           <ToDoAdd onNewToDo={onHandleToDo} />

        </div>
    </div>    
    </>
  )
}

export default TodoApp
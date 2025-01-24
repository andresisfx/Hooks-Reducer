import React from 'react'
import { useReducer } from 'react'
import { toDoReducer } from './toDoReducer.js'
import { ToDoList } from './ToDoList.jsx';
import { ToDoAdd } from './ToDoAdd.jsx';


const initialState = [
    {
        id:new Date().getTime(),
        description:'recolectar gema del alma',
        done:false
    },
    {
        id:new Date().getTime() * 3,
        description:'recolectar gema del infinito',
        done:false
    }
];
export const TodoApp = () => {

    const [toDos, dispatch] = useReducer( toDoReducer, initialState );
    console.log(toDos);
    const onHandleToDo = (toDo) => {
        const action = {
            type:'[TODO] add new toDO',
            payload: toDo
        }
        dispatch(action);
    }

  return (
    <>
     <h1>TodoApp 10, <small>pendientes 2</small></h1>
     <hr />
     
     <div className="row">
        <div className="col-7">
           <ToDoList toDos={toDos} />
        </div>
        <div className="col-5">
            <hr />
            <h4>Agregar TODO</h4>
            <hr />
           <ToDoAdd onNewToDo={onHandleToDo}/>

        </div>
    </div>    
    </>
  )
}

export default TodoApp
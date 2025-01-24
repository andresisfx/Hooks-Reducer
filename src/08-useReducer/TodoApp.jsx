import React from 'react'
import { useReducer } from 'react'
import { toDoReducer } from './toDoReducer.js'
import { ToDoList } from './ToDoList.jsx';


const initialState = [
    {
        id:new Date().getTime(),
        toDo:'recolectar gema del alma',
        done:false
    },
    {
        id:new Date().getTime() * 3,
        toDo:'recolectar gema del infinito',
        done:false
    }
];
export const TodoApp = () => {

    const [toDos, dispatch] = useReducer( toDoReducer, initialState );
    console.log(toDos);
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
            <input 
                type="text"
                className="form-control"
                placeholder="Agrega algo"
            />
            <button
                className="btn btn-outline-primary mt-2"
                onClick={ () => {
                    const action = {
                        type:'add',
                        payload: new Date().getTime()
                    }
                    dispatch(action);
                }}  
            >Agregar</button>

        </div>
    </div>    
    </>
  )
}

export default TodoApp
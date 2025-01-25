import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

const initialState = [
   
    // {
    //     id:new Date().getTime() * 3,
    //     description:'recolectar gema del infinito',
    //     done:false
    // }
];
const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const useToDo = (initialState) => {
  
     const [toDos, dispatch] = useReducer( toDoReducer, initialState , init);
        console.log(toDos);
    
        useEffect(() => {
            localStorage.setItem('toDos', JSON.stringify(toDos));
        })
        const onHandleToDo = (toDo) => {
            const action = {
                type:'[TODO] add new toDO',
                payload: toDo
            }
            dispatch(action);
        }
    
        const onHandleDelete = (id) => {
            
            dispatch({
                type:'[TODO] remove toDO',
                payload: id
            })
        }
        const onToggleToDo = (id) => {
            
            dispatch({
                type:'[TODO] toggle toDO',
                payload: id
            })
        }
        const allToDos = toDos.length;
        const pendingTodos = toDos.filter( todo => !todo.done ).length;

    return {
        toDos,
        allToDos,
        pendingTodos,
        onHandleToDo,
        onHandleDelete,
        onToggleToDo
    }
}
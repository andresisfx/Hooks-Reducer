
const initialState = [{
    id:1,
    toDo:'recolectar gema del alma',
    done:false
}]

const todoReducer = ( state = initialState, action={} ) => {
    if ( action.type === '[TODO] add new toDO' ) {
        console.log(action.payload, "entré al if" );
        return [ ...state, action.payload]
    }
    return state;
}

let toDos= todoReducer();
const newToDo={
    id:2,
    toDo:'recolectar gema del poder',
    done:false
}

const addToDoAction = ()=>{
    return {
        type:'[TODO] add new toDO',
        payload:newToDo
    }
}


 toDos= todoReducer(toDos, addToDoAction);

 console.log({state:toDos});

export const toDoReducer = (initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] add new toDO':
            return [...initialState, action.payload];
           
        case '[TODO] remove toDO':
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] toggle toDO':
            return initialState.map( todo => todo.id === action.payload ? {...todo, done: !todo.done } : todo );    
        default:
            return initialState
            
    }
}
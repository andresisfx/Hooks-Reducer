
export const toDoReducer = (initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] add new toDO':
            return [...initialState, action.payload];
           
        case '[TODO] remove toDO':
            return initialState.filter( todo => todo.id !== action.payload );
        default:
            return initialState
            
    }
}
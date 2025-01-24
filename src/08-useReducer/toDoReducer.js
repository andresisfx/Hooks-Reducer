
export const toDoReducer = (initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] add new toDO':
            return [...initialState, action.payload];
           
    
        default:
            return initialState
            
    }
}
const initialState = [];


export const todoReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case "ADDTODO" : return [...state , {data : action.payload.data , id : action.payload.id}]
        case "DELETETODO" : 
            return state.filter(once => once.id != action.payload.id)
        default : return state;
    }
    
}



const initialState = {
    data : 1
}


export const dataReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case "ADD" : return { data : action.payload};
                            
        default : return  state;
    }
    
}

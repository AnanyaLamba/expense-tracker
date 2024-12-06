const reducer = (state ,action )=>{
    switch(action.type){
        case "FILL":{
            return action.payload;
        }
        case "DELETE":{
            return state.filter((_, index) => index !== action.payload.ind);
            
        }
        case "EDIT":{
            const {ind , expense} = action.payload;
            const updatedState = [...state];
            updatedState[ind]=expense;
            return updatedState;

        }
        case "ADD":{
            const {expense} = action.payload;
            const updatedState = [...state];
            updatedState.push(expense);
            return updatedState;

        }
        default:{
            return state;
        }

        
    }
}

export default reducer;
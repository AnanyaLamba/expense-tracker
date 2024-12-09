const getUniqueId =(expense) =>{
    const maxId = expense.reduce((acc, curr) => {
        return Math.max(acc, curr.id);
    }, -1);
    return maxId + 1;
}
const reducer = (state ,action )=>{
    switch(action.type){
        case "FILL":{
            return action.payload;
        }
        case "DELETE":{
            const {id} = action.payload;
            return state.filter(ele => ele.id !== id);
            
        }
        case "EDIT":{
            const {id , expense} = action.payload;
            const updatedState = [...state];
            const ind = updatedState.findIndex(ele => ele.id === id);
            updatedState[ind]={...expense,
                id,
            };
            return updatedState;

        }
        case "ADD":{
            const {expense} = action.payload;
            const updatedState = [...state];
            updatedState.push({...expense,
                id:getUniqueId(state),
         } );
            return updatedState;

        }
        default:{
            return state;
        }

        
    }
}

export default reducer;
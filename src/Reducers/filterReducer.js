export function filterReducer  (state , action) {
    switch(action.type){
        // sice we are not having anything else in the state rather than the selected category so wea re directly retuning the action.payload kyuki wahi change ho raha hai
        case "SET_CATEGORY": 
       return action.payload;

        default:
            console.log("warning code is not working corrrectly");
            return state;
        
    }
    
}
 
export default filterReducer;
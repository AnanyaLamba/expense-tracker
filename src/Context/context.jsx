import { createContext , useContext , useState} from "react";

const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [editIndex, setEditIndex] = useState(-1);
    const [expenses , setExpenses] = useState([]);

    return(
        <Context.Provider value={{editIndex, setEditIndex, expenses, setExpenses}}>
            {children}
        </Context.Provider>
    )
}

export default Context;



import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  getExpensesFromBackend,
  setExpensesInBackend,
} from "../service/localStorage";
// import { getExpensesFromBackend , setExpensesInBackend } from "../service/localStorage";
import expenseReducer from "../Reducers/expenseReducer";
const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [editId, setEditId] = useState(-1);
  const [expenses, dispatch] = useReducer(expenseReducer, []);
  
  useEffect(() => {
    getExpensesFromBackend().then((expensesVal) =>
      dispatch({
        type: "FILL",
        payload: expensesVal,
      })
    );
  }, []);

  useEffect(() => {
    setExpensesInBackend(expenses).then(() => console.log("saved expenses"));
  }, [expenses]);

  return (
    <Context.Provider value={{ editId, setEditId, expenses, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

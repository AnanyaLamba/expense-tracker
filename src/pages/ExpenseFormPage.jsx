import React, { useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";

const ExpenseFormPage = () => {
  const { editIndex, setEditIndex, expenses, dispatch } =
    useContext(Context);
  const navigate = useNavigate();

  const handleSaveExpense = (expense, ind) => {
    //getting the expense array from the local storage
    // const expenses = getExpenses();
    
    if (ind > -1) {
      //if my index is greater then -1 so we are replacing the data of that particular index data with the new data entry
      dispatch({
        type:"EDIT",
        payload:{ind ,expense}
      });

      
    } else {
      dispatch({
        type:"ADD",
        payload:{expense},
      });
      
    }
    //the updated array is being stored again in the localstorage
    
    //the edit index is again being set to -1
    setEditIndex(-1);
    navigate("/expenses");
  };

  return (
    <>
      <h1>Daily Expense Tracker</h1>
      <ExpenseForm onSaveExpense={handleSaveExpense} key={editIndex} />
    </>
  );
};

export default ExpenseFormPage;

import React, { useContext, useReducer, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import Cards from "../components/Cards";
import filterReducer from "../Reducers/filterReducer";
// import Cards from "../components/Cards";
// import { getExpenses, setExpenses } from '../service/localStorage';

// function useForceUpdate(){
//     const [,setValue] = useState(0);
//     return () => setValue(value => value + 1);
// }

const ExpenseListPage = () => {
  const { setEditId, expenses, dispatch } = useContext(Context);
  const navigate = useNavigate();
  // const forceUpdate = useForceUpdate();
  // const expenses = getExpenses();
  const [istable, setIstable] = useState(true);
  //create  a state for setting all the categories
  // filterDispatch will be connected to filterReducer
  const [selectedCategory , filterDispatch] = useReducer(filterReducer , "All");
  

  const handleDeleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });

    // forceUpdate();
  };

  const handleEditExpense = (id) => {
    setEditId(id);
    navigate("/");
  };
  //setting the value of selectedcategory
  const filtedCategory = selectedCategory === "All" ? expenses :
    expenses.filter((expense) => expense.category === selectedCategory);
  
  
  return (
    <>
      <h1>Expense List</h1>
      <label htmlFor="categories">
        Filtered By Categoires: 
      </label>
      <select name="category" id="category" value={selectedCategory} onChange={(e)=>filterDispatch({
        type: "SET_CATEGORY",
        payload:e.target.value,
      })}>
        <option value="All">All</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food">Food</option>
        <option value="Groceries">Groceries</option>
        <option value="Gift">Gift</option>
        <option value="Apparel">Apparel</option>
        <option value="Self care">Self Care</option>
        <option value="Donation">Donation</option>
        <option value="Capital Expense">Capital Expense</option>
        <option value="Travel">Travel</option>
        <option value="Repair">Repair</option>
        <option value="Medical">Medical</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Petrol">Petrol</option>
      </select>
      <button onClick={() => setIstable(true)}>View Table</button>
      <button onClick={() => setIstable(false)}>View Card</button>

      {/* ternary oprator  */}
      {istable ? (
        <ExpenseList
          expenses={filtedCategory || []}
          onDeleteExpense={handleDeleteExpense}
          onEditExpense={handleEditExpense}
        />
      ) : (
        <Cards
          expenses={filtedCategory || []}
          onDeleteExpense={handleDeleteExpense}
          onEditExpense={handleEditExpense}
        />
      )}
    </>
  );
};

export default ExpenseListPage;

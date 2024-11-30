import React, { useContext, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
// import { getExpenses, setExpenses } from '../service/localStorage';

// function useForceUpdate(){
//     const [,setValue] = useState(0);
//     return () => setValue(value => value + 1);
// }

const ExpenseListPage = () => {
  const { setEditIndex, expenses, setExpenses } = useContext(Context);
  const navigate = useNavigate();
  // const forceUpdate = useForceUpdate();
  // const expenses = getExpenses();

  const handleDeleteExpense = (ind) => {
    const updatedExpenseArray = expenses.filter((_, index) => index !== ind);
    setExpenses(updatedExpenseArray);
    // forceUpdate();
  };

  const handleEditExpense = (ind) => {
    setEditIndex(ind);
    navigate("/");
  };

  return (
    <>
      <h1>Expense List</h1>
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
    </>
  );
};

export default ExpenseListPage;

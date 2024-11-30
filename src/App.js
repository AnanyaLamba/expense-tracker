import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import ExpenseListPage from "./pages/ExpenseListPage";
import { ContextProvider } from "./Context/context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <nav class="tab">
            <NavLink to="">Add Expense</NavLink>
            <NavLink to="expenses">View Expenses</NavLink>
          </nav>
          <Routes>
            <Route path="" element={<ExpenseFormPage />}></Route>
            <Route path="expenses" element={<ExpenseListPage />}></Route>
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

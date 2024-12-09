import React, { useContext } from 'react';
import Context from '../Context/context';
import './Cards.css'; // Import the CSS file

const Cards = ({ expenses , onDeleteExpense, onEditExpense }) => {
  //don't use the props from context do the prop dri
  // const { expenses } = useContext(Context);

  return (
    <div className="card-container">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-card">
          <div className="expense-info">
            <p><strong>Date:</strong> {expense.date}</p>
            <p><strong>Amount:</strong> ${expense.amount}</p>
            <p><strong>Title:</strong> {expense.title}</p>
            <p><strong>Category:</strong> {expense.category}</p>
            <p><strong>Payment Mode:</strong> {expense.paymentMode}</p>
            <p><strong>Type:</strong> {expense.recurring ? 'Recurring' : 'One-time'}</p>
            <p><strong>Beneficiary:</strong> {expense.beneficiary}</p>
            <p><strong>Tags:</strong> {expense.tags?.join(', ')}</p>
          </div>
          <div className="card-buttons">
            <button className="delete-btn" onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            <button className="edit-btn" onClick={() => onEditExpense(expense.id)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

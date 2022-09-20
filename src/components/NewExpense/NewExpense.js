import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm itemAdded={props.itemAdded} />
    </div>
  );
};

export default NewExpense;

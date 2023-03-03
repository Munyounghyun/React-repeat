import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (e) => {
    const expenseData = {
      ...e,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setIsEditing(false); //추가하면 다시 닫힘
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={startEditingHandler}>Add Nex Expense</button>
      ) : (
        <ExpenseForm saveData={saveDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;

import React, { useState, useEffect } from 'react';
import { updateExpense } from '../services/expenseService';

const EditExpense = ({ expense, fetchExpenses, closeEdit }) => {
  const [name, setName] = useState(expense.name);
  const [amount, setAmount] = useState(expense.amount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedExpense = { name, amount: parseFloat(amount) };
    await updateExpense(expense._id, updatedExpense);  // Use the expense ID to update
    fetchExpenses();  // Refresh the list after updating
    closeEdit();  // Close the edit form
  };

  return (
    <div>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Update Expense</button>
        <button type="button" onClick={closeEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default EditExpense;
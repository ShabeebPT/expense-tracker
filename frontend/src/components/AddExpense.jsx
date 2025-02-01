import React, { useState } from 'react';
import { addExpense } from '../services/expenseService';

const AddExpense = ({ fetchExpenses }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { name, amount: parseFloat(amount) };
    await addExpense(newExpense);
    fetchExpenses();  // Refresh the list after adding
    setName('');
    setAmount('');
  };

  return (
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
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
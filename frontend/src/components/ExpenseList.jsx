import React, { useState } from 'react';
import { deleteExpense } from '../services/expenseService';
import EditExpense from './EditExpense';

const ExpenseList = ({ expenses, fetchExpenses }) => {
  const [editingExpense, setEditingExpense] = useState(null);

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();  // Refresh the list after deletion
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const closeEdit = () => {
    setEditingExpense(null);
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.name} - ${expense.amount}{' '}
            <button onClick={() => handleEdit(expense)}>Edit</button>
            <button onClick={() => handleDelete(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingExpense && (
        <EditExpense
          expense={editingExpense}
          fetchExpenses={fetchExpenses}
          closeEdit={closeEdit}
        />
      )}
    </div>
  );
};

export default ExpenseList;
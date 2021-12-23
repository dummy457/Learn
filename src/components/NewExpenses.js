import React from 'react';
import './NewExpenses.css';
import  ExpenseForm  from './ExpenseForm';

export default function NewExpenses(props) {

    function saveExpenseDatahandler (enteredexpenseData) {
        
        const expenseData = {
            ...enteredexpenseData , 
            id:  Math.random().toString()
        }
        
        console.log(enteredexpenseData);

        props.newExpenses(expenseData);
    }

    return (
        <div className="new-expense">
            <h3>Add New Expense</h3>
           <ExpenseForm onsaveExpenseData = {saveExpenseDatahandler}/>
        </div>
    )
}

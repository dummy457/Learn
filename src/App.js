import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import React from 'react';
import NewExpenses from './components/NewExpenses';
import { useState , useEffect } from 'react';

let DUMMY_EXPENSE =  [ 
    {
        id:'e1',
        title: 'School Fees',
        amount: 250,
        date: new Date(2021,5,20)
    },

    {
        id:'e2',
        title: 'Insurance',
        amount: 550,
        date: new Date(2021,2,19)
    },

    {
        id:'e3',
        title: 'House Rent',
        amount: 700,
        date: new Date(2021,11,6)
    }
];


let date = new Date(2021 , 3 , 20);
let title = "School Fees";
let amount = 3000; 


 function App(){

    const [expense , setExpensese] = useState(DUMMY_EXPENSE);


    function addExpenseHandler (newExpenses){
            console.log("in App")
            console.log(newExpenses);

            const updateExpense = [...expense , newExpenses];
            setExpensese(updateExpense);
    }

    return (
        <div>
        <h2 className='heading'>Expense Tracker</h2>

        <NewExpenses newExpenses = {addExpenseHandler}/>
        
        <ExpenseItem
        date={date} 
        title={title} 
        amount={amount}
        ></ExpenseItem>
        
        <Expenses item={expense} />
        </div>
        
    );
}

export default App;
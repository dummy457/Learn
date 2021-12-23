import React from "react";
import './ExpenseForm.css';
import { useState } from "react";

 const ExpenseForm = (props) => {

    const[enteredTitle , setTitle] = useState("");
    const[enteredAmount , setAmount] = useState("");
    const[enteredDate , setDate] = useState("");

     
    function titleChangeHandler(event) {
            //console.log(event.target.value);
            setTitle(event.target.value);
    }

    function amountChangeHandler(event) {
       // console.log(event.target.value);

            setAmount(event.target.value);
    }

    function dateChangeHandler(event) {
            
       // console.log(event.target.value);
            setDate(event.target.value);
    }

    function submitHandler (event) {
            event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            //the date stored in "enteredDate" is in a String format
            date: new Date(enteredDate)
        }

            console.log(expenseData);

            //sending the "expenseData" object or passing the object
            //by calling the object using props
            
            props.onsaveExpenseData (expenseData) ; 

// after storing the entered items in the object 'expenseData'
// we will immediately make the variables(created using useSate ) null or ''
// the fields will be set back to empty
// the variable created using useState can only be changed using the function       
            setAmount('');
            setDate('');
            setTitle('');
    }

   

    return (
       <form onSubmit={submitHandler}>
           <div className="new-expense_constrols">
                <div className="new-expense_control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>

                <label>Amount</label>
                <input type="number" min="0" steps = "1.0" value={enteredAmount} onChange={amountChangeHandler}/>

                
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
           </div>

               <button type="submit">submit</button>
           
       </form>
    )
}


export default ExpenseForm;
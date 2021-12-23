import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react';
import { useState } from 'react';



function ExpenseItem(props) {

  // useState : returns an array which has 2 elements.
  //            element 1. is a variable
  //            element 2. is a fucntion
  //            using that function , we pass the change to be made in it's argument

  // let [title , changeTitle] = useState(props.title);
  // let [newTitle , setNewTitle] = useState("");

  // const onchange = (event) => {
  //   setNewTitle(event.target.value);
  // }


  // const onclick = () => {
  //   console.log("changing title");
  //   changeTitle(newTitle);
  // }

    return (
      <div className='ExpenseItem'>

           <ExpenseDate date ={props.date}/>

            {/* <div>{props.date.toISOString}</div> */}
           <div className='ExpenseItem_product'>
            <h2>{props.title}</h2>
           <div className='ExpenseItem_amt'>{props.amount}₹</div>
           </div>
        {/* <input type="text" value={newTitle} onChange={onchange} />
        <button onClick={onclick}>Change title</button> */}
      </div>
    ) 
} 

export default ExpenseItem;

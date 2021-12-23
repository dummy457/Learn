import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';
import Card from './Card';

function Expenses(props) {
    return (
      <Card className="expenses">
      
     <h6> Wrapped inside Card </h6>

{
          props.item.map(
            (expenses) => (
                  <ExpenseItem
                  date={expenses.date}
                  title={expenses.title}
                  amount={expenses.amount}
                ></ExpenseItem>
            )
          )

  }

        {/* <ExpenseItem
          date={props.item[1].date}
          title={props.item[1].title}
          amount={props.item[1].amount}
        ></ExpenseItem>

        <ExpenseItem
          date={props.item[2].date}
          title={props.item[2].title}
          amount={props.item[2].amount}
        ></ExpenseItem>
      */}

      </Card>
    );
}

export default Expenses;

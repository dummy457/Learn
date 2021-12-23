import './ExpenseDate.css';
import React from 'react';

export default function ExpenseDate(props) {
    
    const month = props.date.toLocaleString('en-US' , {month: 'long'}) ;
    const year = props.date.getFullYear() ;
    const day = props.date.toLocaleString('en-US' , {day: '2-digit'}) ;

    return (
        <div className="ExpenseDate">
            <div className="ExpenseDate_year">{year}</div>
            <div className="ExpenseDate_month">{month}</div>
            <div className="ExpenseDate_day">{day}</div>
        </div>
    );
}

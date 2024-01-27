import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("The value cannot exceed £20000");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000
            })
        } else if (event.target.value < totalExpenses) {
            alert("You cannot make the budget value lower than the spending");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses
            })
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            })
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

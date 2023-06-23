import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, Currency, remaining} = useContext(AppContext);
    const changeBudget = (val) => {
        setTimeout(dispatch({
            type: 'SET_BUDGET',
            payload: val,
        }), 1000);
        if ( budget > 20000) {
            alert("Budget cannot be greater than 20.000"+Currency);
            budget("");
            return;
        }
        if ( remaining < 0 ) {
            alert("Budget cannot be lower than the spendings");
            budget("");
            return;
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}</span>
            <input type="number" step="10" onChange={(event) => changeBudget(event.target.value)} value={budget}></input>
        </div>
    );
};
export default Budget;
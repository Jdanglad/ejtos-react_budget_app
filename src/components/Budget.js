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
        <div className="alert alert-secondary">
            <div className="row">
                <span className="w-25">Budget: </span>
                <div className="w-75 input-group" style={{marginBottom: '-0.46rem', marginTop: '-0.46rem'}}>
                    <span className="input-group-text" id="label-addon1">{Currency}</span>
                    <input type="number" className="form-control" step="10" aria-describedby="label-addon1" onChange={(event) => changeBudget(event.target.value)} value={budget}></input>
                </div>
            </div>
        </div>
    );
};
export default Budget;
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    return (
        <div className="form-floating">
            <select className='form-select alert alert-secondary' id="currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
                <option value="£">£ Pound</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="MXN">MXN Mexican Peso</option>
            </select>
            <label for="currency">Currency</label>
        </div>
    );
};

export default Currency;
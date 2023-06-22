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
            <select className='alert alert-secondary' name="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
                <option value="£">£ Pound</option>
                <option value="CAD">CAD Canadian Dollar</option>
                <option value="MXN">MXN Mexican Peso</option>
            </select>
    );
};

export default Currency;
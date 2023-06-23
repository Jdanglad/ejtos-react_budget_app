import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        })
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><input type="image" src="https://static.vecteezy.com/system/resources/previews/009/266/327/original/plus-sign-icon-free-png.png" alt="plus_button" width="30px" height="30px" onClick={event=> increaseAllocation(props.name)}></input></td>
        <td><input type="image" src="https://static.vecteezy.com/system/resources/previews/009/267/401/original/minus-sign-icon-free-png.png" alt="minus_button" width="30px" height="30px" onClick={event => decreaseAllocation(props.name)}></input></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;

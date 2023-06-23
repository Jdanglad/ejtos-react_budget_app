import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, Currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    const submitEvent = () => {
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds "+Currency+remaining);
            setCost("");
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
    return (
        <div className="row mt-3">
            <div className="w-25 form-floating">
                <select className="form-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing" name="marketing"> Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                    <option value="Admin" name="admin">Admin</option>
                </select>
                <label for="inputGroupSelect01">Department</label>
            </div>
            <div className="w-25  form-floating">
                <select className="form-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
                <label for="inputGroupSelect02">Allocation</label>
            </div>
            <div className="w-25 input-group mb-3">
                <input required='required' type='number'  className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event) => setCost(event.target.value)}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AllocationForm;

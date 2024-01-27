import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch(({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        }))
    }
    return (
        <div className='alert bg-success'>
            <label className="text-white" for="currency">Currency </label>
            <select onChange={handleCurrencyChange} className="bg-transparent border-0 text-white" id="currency">
                <option className="bg-success" value="$">($ Dollar)</option>
                <option className="bg-success" selected value="£">(£ Pound)</option>
                <option className="bg-success" value="€">(€ Euro)</option>
                <option className="bg-success" value="₹">(₹ Ruppee)</option>
            </select>
        </div>
    )
}
export default Currency;

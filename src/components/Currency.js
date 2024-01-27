import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    return (
        <div className='alert alert-secondary'>
            <span>Currency(
                <select id="currency">
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            )</span>
        </div>
    )
}
export default Currency;

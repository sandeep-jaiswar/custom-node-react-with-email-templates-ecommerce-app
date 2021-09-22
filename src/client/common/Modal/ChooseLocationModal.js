import React, { useState } from 'react'
import Button from '../Button';

function ChooseLocationModal(props) {
    const [state, setState] = useState({
        pincode: ''
    });
    const setLocation = e => {
        e.preventDefault();
        e.stopPropagation();
        if (state.pincode.length === 0) {
            return;
        }
        window.pincode = state.pincode;
        props.close && props.close();
    }
    return (
        <div className='ChooseLocationModal'>
            <div className='suggest-container1'>
                <div>Select a delivery location to see product</div>
                <div>availability and delivery options</div>
            </div>
            <div className='sign-in-btn'>
                <div className='hr-line'></div>
                <Button size={'lg'}>Sign in to see your address</Button>
                <div className='hr-line'></div>
            </div>
            <div className='suggest-container2'>
                <span>or enter an Indian pincode</span>
            </div>
            <form className='choose-location-form' onSubmit={setLocation}>
                <input type='text' id='pincodeInput' maxLength='6' onChange={(e) => setState({ ...state, pincode: e.target.value.replace(/[^0-9]/g, '') })} value={state.pincode}></input>
                <Button submit="submit">Apply</Button>
            </form>
        </div>
    )
}

export default ChooseLocationModal

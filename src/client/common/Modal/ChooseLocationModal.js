import React, { useState } from 'react'
import Button from '../Button';

function ChooseLocationModal() {
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
            <div className='choose-location-form'>
                <input type='text'></input>
                <Button >Apply</Button>
            </div>
        </div>
    )
}

export default ChooseLocationModal

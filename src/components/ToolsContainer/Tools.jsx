import React from 'react';
import DisplayCart from './DisplayCart';

const Tools = ({tools}) => {
    console.log(tools)
    return (
        <div className=''>
            {
                <DisplayCart tools={tools}></DisplayCart>
            }
        </div>
    );
};

export default Tools;
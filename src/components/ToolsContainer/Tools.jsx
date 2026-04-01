import React from 'react';
import DisplayCart from './DisplayCart';

const Tools = ({tools,carts,setCarts}) => {
    // console.log(tools)
    return (
        <div className=''>
            {
                <DisplayCart tools={tools} carts={carts} setCarts={setCarts}></DisplayCart>
            }
        </div>
    );
};

export default Tools;
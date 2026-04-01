import React, { use } from 'react';
import Tools from './Tools';

const ToolsContainer = ({cardData,carts,setCarts}) => {
    const cardDatas = use(cardData);
    // console.log(cardDatas);
    return (
        <div className='max-w-[1100px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
                cardDatas.map(tools=><Tools  key={tools.id} tools={tools} carts={carts} setCarts={setCarts}></Tools>) 
            }
        </div>
    );
};

export default ToolsContainer;
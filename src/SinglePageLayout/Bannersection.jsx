import React from 'react';
import banner from '../../public/banner.png'

const Bannersection = () => {
    return (
        <div className='w-full h-auto'>
            <img className='w-full h-96' src={banner} alt="" />
        </div>
    );
};

export default Bannersection;
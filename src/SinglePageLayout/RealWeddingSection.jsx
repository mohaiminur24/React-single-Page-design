import React from 'react';
import one from '../../public/RealWedding/one.png'
import two from '../../public/RealWedding/two.png'
import three from '../../public/RealWedding/three.png'
import four from '../../public/RealWedding/four.png'
import subone from '../../public/RealWedding/subone.png'
import subtwo from '../../public/RealWedding/subtwo.png'

const RealWeddingSection = () => {
    return (
        <div className='w-11/12 mx-auto font-Inter my-10'>
            <h1 className='text-3xl font-bold text-teal-800'>Real Wedding</h1>
            <p className='mb-5'>List your wedding and browse portfolio</p>
            <div className='grid grid-cols-4 gap-5'>
                <div className='border p-2 rounded-md'>
                    <img src={one} alt="" />
                    <div className='grid grid-cols-3'>
                        <img src={subone} alt="" />
                        <img src={subtwo} alt="" />
                        <img src={subtwo} alt="" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='font-bold'>Danielle & Ronnie</h1>
                        <p className='text-xs'>38 photos, kittery, polland</p>
                    </div>
                </div>
                <div className='border p-2 rounded-md'>
                    <img src={two} alt="" />
                    <div className='grid grid-cols-3'>
                        <img src={subone} alt="" />
                        <img src={subtwo} alt="" />
                        <img src={subtwo} alt="" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='font-bold'>Danielle & Ronnie</h1>
                        <p className='text-xs'>38 photos, kittery, polland</p>
                    </div>
                </div>
                <div className='border p-2 rounded-md'>
                    <img src={three} alt="" />
                    <div className='grid grid-cols-3'>
                        <img src={subone} alt="" />
                        <img src={subtwo} alt="" />
                        <img src={subtwo} alt="" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='font-bold'>Danielle & Ronnie</h1>
                        <p className='text-xs'>38 photos, kittery, polland</p>
                    </div>
                </div>
                <div className='border p-2 rounded-md'>
                    <img src={four} alt="" />
                    <div className='grid grid-cols-3'>
                        <img src={subone} alt="" />
                        <img src={subtwo} alt="" />
                        <img src={subtwo} alt="" />
                    </div>
                    <div className='mt-2'>
                        <h1 className='font-bold'>Danielle & Ronnie</h1>
                        <p className='text-xs'>38 photos, kittery, polland</p>
                    </div>
                </div>
                
            </div>
            <div className='text-center mt-5'>
            <button className='px-5 py-2 bg-teal-600 rounded-md text-sm font-bold text-white'>View more wedding</button>
            </div>
        </div>
    );
};

export default RealWeddingSection;
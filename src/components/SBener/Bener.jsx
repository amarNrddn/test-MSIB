import React from 'react'
import { bener } from '../../assets'

const Bener = () => {
    return (
        <div className='w-[100%] relative'>
            <img src={bener} alt="" className='w-full h-[50ch] object-cover bg-clip-path' />
            <div className="bg-black w-full h-[50ch] opacity-35 absolute top-0 mt-auto bg-clip-path "></div>
            <div className="absolute top-36 flex flex-col justify-center text-white items-center  w-full ">
                <h1 className='font-bold text-xl'>Ideas</h1>
                <p>Where all our great thing begin</p>
            </div>
        </div>
    )
}

export default Bener
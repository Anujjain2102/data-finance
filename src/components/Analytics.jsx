import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[80%] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Data analytics involves collecting, processing, and interpreting data to gain insights, make informed decisions, and uncover patterns, trends, and correlations for strategic business or scientific purposes.</p>
                <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
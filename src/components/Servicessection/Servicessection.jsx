import React from 'react'
import Cards from './Cards'

function Servicessection() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <div className='w-full mb-2'>
            <h3 className='uppercase text-[#F4B400] w-full text-center'>Our Services</h3>
            <h1 className='text-5xl text-black w-full text-center'>What We Do</h1>
            <p className='w-full text-center text-[#817e7e]'>We offer a comprehensive range of construction services tailored to your needs</p>
        </div>
        <Cards />
    </div>
  )
}

export default Servicessection
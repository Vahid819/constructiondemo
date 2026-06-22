import React from 'react'
import Nav from './Navbar/Nav'
import Searchs from './Navbar/Search'

function Navbar() {
  return (
    <div className='fixed w-full h-[10%] z-50 text-white flex justify-around'>
        <Nav />
        <Searchs />
    </div>
  )
}

export default Navbar
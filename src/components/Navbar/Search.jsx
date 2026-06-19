import React from 'react'
import { Search, ArrowUpRight, Grip } from 'lucide-react'


function Searchs() {
  return (
    <div className='flex items-center gap-2'>
        <div>
            <Search />
        </div>
        <div className='flex gap-5 border items-center px-3 py-2 rounded-full bg-orange-400'>
            <h4 className='uppercase font-Pliant'>Get a quote</h4>
            <ArrowUpRight width={30} height={30} className='border border-black rounded-full hover:p-1 hover:transition-all bg-black text-white hover:shadow-xl hover:shadow-white'/>
        </div>
        <div className='border border-black rounded-full p-1 bg-black text-white'>
            <Grip width={30} height={30} />
        </div>

    </div>
  )
}

export default Searchs
import React from 'react'
import { Button } from '../ui/button'
import {ArrowRight} from "lucide-react"

function Title() {
  return (
    <div className='absolute w-full h-screen'>
        <section className='w-[50%] h-full flex flex-col justify-center items-center px-20'>
            <div>
            <h5 className='uppercase text-sm text-[#FFFFFF] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]'>building the future</h5>
            <h1 className='text-7xl text-[#FFFFFF] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]'>Building <b id='structures' className='text-transparent text-8xl'>structures,</b> crafting legacies<b id='dot' className='text-transparent'>.</b></h1>
            </div>
            <div className='gap-3 flex flex-col max-width: 550px mt-2'>
                <p className='text-[#F8F5F0]'>We delive innovation and sustainable construction solutions with quaility, integrity,and excellence.</p>
                <div className='flex gap-4'>
                    <Button className="py-7 text-xl text-black bg-[#F4B400] border-black hover:bg-transparent transition-all hover:border-[#FAF8F5] hover:text-[#FAF8F5] active:scale-50 hover:scale-105">Our Services <ArrowRight /></Button>
                    <Button className="py-7 text-xl bg-transparent border-[#FAF8F5] text-[#FAF8F5] hover:bg-[#F4B400] transition-all hover:border-black hover:text-black active:scale-50 hover:scale-105">Explore Project <ArrowRight /></Button>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Title
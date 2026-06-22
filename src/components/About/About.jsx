import React from 'react'
import Abouttext from './Abouttext'
import Aboutimage from './Aboutimage'


function About() {
  return (
    <div className='w-full h-full flex'>
        <Abouttext />
        <Aboutimage />
    </div>
  )
}

export default About
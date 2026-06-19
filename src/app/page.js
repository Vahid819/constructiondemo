
import SmallIntroduction from '@/components/Hero/SmallIntroduction'
import React from 'react'
// import introvideo from "@/../public/video/"

function page() {
  return (
    <div>
    <section className="relative h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/introvideo.mp4" type="video/mp4" />
      </video>
      <SmallIntroduction />
    </section>
    </div>
  )
}

export default page
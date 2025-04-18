'use client'
import React, { useState, useEffect } from 'react'
import ImageData from '@/asset/imagesData/section1.json'
import Image from 'next/image'
import { WiStars } from 'react-icons/wi'

const MainHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % ImageData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='px-4 md:p-20'>
      <div className='relative w-full max-w-[1300px]  mx-auto rounded-xl overflow-hidden'>
        {/* Background Image */}
        <div className='relative w-full h-[500px] md:h-[500px]'>
          <Image
            src={ImageData[currentImageIndex].image}
            alt={ImageData[currentImageIndex].title}
            fill
            priority
            className='object-cover'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white px-6 py-10 md:px-28'>
            {/* AI Label */}
            <p className='text-sm font-semibold flex items-center gap-2 mb-4'>
              Powered by AI
              <span className='border px-2 py-1 rounded-2xl bg-white text-black text-xs'>
                Beta
              </span>
            </p>

            {/* Title Text */}
            <p className='text-2xl md:text-5xl font-semibold max-w-[380px] mb-4'>
              Plan your kind of trip
            </p>

            {/* Subtext */}
            <p className='text-xl md:text-5xl max-w-[500px]'>
              Get custom recs for all the things you’re into with AI trip
              builder.
            </p>

            {/* Button */}
            <button className='cursor-pointer flex bg-white text-black px-4  py-2 rounded-3xl mt-6'>
              <WiStars size={35} /> 
              <span className='text-2xl font-semibold'>Start a trip with AI </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeroSection

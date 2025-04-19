'use client'
import React, { useState, useEffect } from 'react'
import ImageData from '@/asset/imagesData/section1.json'
import Image from 'next/image'

const MainHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % ImageData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='px-0 py-6 md:px-16 md:py-16'>
      <div className='relative w-full max-w-7xl mx-auto md:rounded-2xl overflow-hidden'>
        {/* Background Image */}
        <div className='relative w-full h-[400px] md:h-[450px]'>
          <Image
            src={ImageData[currentImageIndex].image}
            alt={ImageData[currentImageIndex].title}
            fill
            priority
            className='object-cover md:rounded-2xl'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/40 flex flex-col justify-end md:justify-center items-start text-white px-8 pb-8 md:pb-0 md:px-16 md:rounded-2xl'>
            {/* AI Label */}
            <div className='flex items-center gap-2 mb-2 md:mb-3'>
              <p className='text-sm md:text-base font-medium'>Powered by AI</p>
              <span className='bg-white text-black text-xs font-semibold px-2 py-1 md:px-3 md:py-2 rounded-lg'>
                BETA
              </span>
            </div>

            {/* Title Text - Mobile version (no breaks) and Desktop version (with breaks) */}
            <h1 className='text-4xl w-full md:hidden font-bold mb-1 leading-tight'>
              Plan your kind of trip
            </h1>
            <h1 className='hidden md:block text-5xl font-bold mb-2 leading-tight'>
              Plan your kind of<br />
              trip
            </h1>

            {/* Subtext - Mobile version (no breaks) and Desktop version (with breaks) */}
            <p className='text-lg w-full md:hidden font-normal mb-3 leading-snug'>
              Get custom recs for all the things you're into with AI trip builder.
            </p>
            <p className='hidden md:block text-2xl font-normal mb-4 leading-snug'>
              Get custom recs for all the<br />
              things you're into with AI trip<br />
              builder.
            </p>

            {/* Button */}
            <button className='cursor-pointer flex items-center bg-white text-black px-3 py-2 md:px-4 md:py-3 rounded-full text-sm md:text-base font-semibold'>
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L10.8 7.5L8 8L10 10L9.5 13L12 11.5L14.5 13L14 10L16 8L13.2 7.5L12 5Z" fill="currentColor" />
                <path d="M4 14L3 17L6 16L4 14Z" fill="currentColor" />
                <path d="M20 14L18 16L21 17L20 14Z" fill="currentColor" />
              </svg>
              Start a trip with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeroSection
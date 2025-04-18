"use client"
import React from 'react'
import ImageData from '@/asset/imagesData/section3.json'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const CountryCardSection = () => {
  const scrollLeft = () => {
    const container = document.querySelector('.scroll-container')
    if (container) container.scrollLeft -= 300
  }

  const scrollRight = () => {
    const container = document.querySelector('.scroll-container')
    if (container) container.scrollLeft += 300
  }

  return (
    <div className='px-4 md:px-20 py-10 bg-white relative'>
      {/* Heading */}
      <div className='mb-10 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
          Explore the world's most stunning seasides
        </h1>
        <p className='text-lg text-gray-600 mt-2'>
          2025's Travellers' Choice Awards Best of the Best Beaches
        </p>
      </div>

      {/* Scroll Section */}
      <div className='relative'>
        {/* Cards */}
        <div className='scroll-container flex gap-6 overflow-x-auto scrollbar-hide pb-4 c md:px-10'>
          {ImageData.map((item, index) => (
            <div
              key={index}
              className='min-w-[250px] flex-shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden relative'
            >
              <div className='relative '>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={290}
                  height={300}
                  className='rounded-2xl'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 rounded-b-2xl'>
                  <h2 className='text-xl font-bold text-white'>{item.title}</h2>
                </div>
              </div>    
            </div>
          ))}
        </div>

        {/* Left Arrow - Changed to always be visible */}
        <button
          onClick={scrollLeft}
          className='flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 bg-white/90 border-2 rounded-full 
            hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
        >
          <IoIosArrowRoundBack size={30} />
        </button>

        {/* Right Arrow - Changed to always be visible */}
        <button
          onClick={scrollRight}
          className='flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 bg-white/90 border-2 rounded-full 
            hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
        >
          <IoIosArrowRoundForward size={30} />
        </button>
      </div>
    </div>
  )
}

export default CountryCardSection
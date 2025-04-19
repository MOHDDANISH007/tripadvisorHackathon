'use client'
import React, { useRef } from 'react'
import ImageData from '@/asset/imagesData/section6.json'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const CountryCardSection = () => {
  const scrollContainerRef = useRef(null)
//   console.log("ScrollContainerRef", scrollContainerRef)

  const LeftHandleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300
    }
  }

  const RightHandleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300
    }
  }

  return (
    <div className='px-4 md:px-16 py-10 bg-white relative card-container'>
      {/* Heading */}
      <div className='mb-5 text-center md:text-left'>
        <h1 className='text-2xl md:text-2xl font-semibold'>
          Top destination for your next vacation
        </h1>
      </div>

      {/* Scroll Section with negative margin container for buttons */}
      <div className='relative'>
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className='scroll-container  flex gap-4 overflow-x-auto scrollbar-hide pb-4 w-full'
        >
          {ImageData.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 bg-white rounded-md shadow-lg overflow-hidden relative w-[390px] h-[390px]'
            >
              <div className='relative w-full h-full before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-10 cursor-pointer'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent px-4 py-4 rounded-b-md'>
                  <h2 className='text-3xl font-bold text-white'>
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={LeftHandleScroll}
          className='absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
        >
          <IoIosArrowRoundBack size={30} className='mx-auto' />
        </button>

        {/* Right Arrow */}
        <button
          onClick={RightHandleScroll}
          className='absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
        >
          <IoIosArrowRoundForward size={30} className='mx-auto' />
        </button>
      </div>
    </div>
  )
}

export default CountryCardSection

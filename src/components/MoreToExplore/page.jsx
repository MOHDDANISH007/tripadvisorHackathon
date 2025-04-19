'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import ImageData from '@/asset/imagesData/section5.json'

const MoreToExplore = () => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300
    }
  }

  return (
    <div className='more-to-explore px-4 md:px-16 py-16 mt-10 w-full bg-[rgb(242,241,236)]'>
      <div>
        <h1 className='text-4xl font-semibold'>More to explore</h1>

        <div className='relative mt-5 lg:mt-10'>
          {/* Arrows only on small screens */}
          <div className='block lg:hidden'>
            <button
              onClick={scrollLeft}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 z-10
              w-10 h-10 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg
              flex items-center justify-center'
            >
              <IoIosArrowRoundBack size={25} />
            </button>

            <button
              onClick={scrollRight}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10
              w-10 h-10 bg-white border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg
              flex items-center justify-center'
            >
              <IoIosArrowRoundForward size={25} />
            </button>
          </div>

          {/* Scrollable on small, wrapped on large */}
          <div
            ref={scrollContainerRef}
            className='flex gap-6 px-2 scroll-smooth
              overflow-x-auto lg:overflow-x-visible 
              scrollbar-hide lg:flex-wrap'
          >
            {ImageData.map((item, index) => (
              <div
                key={index}
                className='min-w-[260px] md:min-w-[300px] flex-shrink-0'
              >
                <div className='relative group'>
                  <Image
                    src={item.image}
                    width={390}
                    height={390}
                    alt={item.title}
                    className='rounded-lg'
                  />
                  <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg'></div>
                </div>

                <div className='mt-2 max-w-80'>
                  <h1 className='text-xl font-semibold text-center'>
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreToExplore

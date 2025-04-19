'use client'
import React, { useRef } from 'react'
import ImageData from '@/asset/imagesData/section4.json'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const CountryCardSection2 = () => {
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
    <div className='card-container px-4 md:px-16 py-10 bg-white relative overflow-hidden'>
      <div className='mb-5 text-center md:text-left'>
        <h1 className='text-2xl md:text-2xl font-semibold'>
          Top experiences on Tripadvisor
        </h1>
        <p className='text-md text-gray-600 mt-2 card-description'>
          The best tours, activities and tickets
        </p>
      </div>

      {/* Navigation Buttons - Better positioned for mobile and desktop */}
      <div className='relative'>
        {/* Left Button */}
        <button
          className='absolute left-0 md:-left-2 top-1/2 transform -translate-y-10/4 z-10
                    w-10 h-10 md:w-12 md:h-12 bg-white/90 border-2 rounded-full 
                    hover:bg-black hover:text-white md:hover:bg-black md:hover:text-white transition-all duration-300 shadow-lg
                    flex items-center justify-center'
          onClick={scrollLeft}
        >
          <IoIosArrowRoundBack size={25} className='mx-auto' />
        </button>

        {/* Right Button */}
        <button
          className='absolute right-0 md:-right-4  top-1/2 transform -translate-y-10/4 z-10
                    w-10 h-10 md:w-12 md:h-12 bg-white border-2 rounded-full 
                    hover:bg-black hover:text-white transition-all duration-300 shadow-lg
                    flex items-center justify-center'
          onClick={scrollRight}
        >
          <IoIosArrowRoundForward size={25} className='mx-auto' />
        </button>

        {/* Cards */}
        <div
          className='overflow-x-auto scrollbar-hide'
          ref={scrollContainerRef}
        >
          <div className='overflow-x-auto scroll-smooth flex flex-row gap-3 w-max px-2 md:px-2'>
            {ImageData.map((item, index) => (
              <div key={index} className='min-w-[260px] md:min-w-[300px]'>
                <div className='relative group cursor-pointer'>
                  <Image
                    src={item.image}
                    width={390}
                    height={390}
                    alt={item.title}
                    className='rounded-lg'
                  />
                  {/* Overlay element that appears on hover */}
                  <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg'></div>
                </div>
                
                {/* Badges below image */}
                <div className='mt-2 flex flex-wrap gap-2'>
                  {(item.bestseller || item.bestSeller) && (
                    <div className='inline-block bg-white text-black border text-xs font-semibold px-2 py-1 rounded-lg'>
                      <span className='font-bold text-lg'> Best Seller </span>
                    </div>
                  )}

                  {item['likely to sell out'] && (
                    <div className='inline-block bg-white text-black border-2 text-xs font-semibold px-2 py-1 rounded-lg'>
                      <span className='font-bold text-lg'>
                        Likely to Sell Out
                      </span>
                    </div>
                  )}
                </div>

                {/* Title and description */}
                <div className='mt-2 space-y-1'>
                  <h1 className='font-semibold text-xl max-w-[400px]'>
                    {item.title}
                  </h1>
                  <div className='flex items-center gap-2 text-sm text-gray-700'>
                    <p className='font-semibold card-description'>{item.rating}</p>
                    <p className='card-description'>({item.reviews} reviews)</p>
                  </div>
                  <p className='text-black font-bold'>
                    from <span className='font-extrabold'>{item.price}</span>{' '}
                    per adult
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryCardSection2
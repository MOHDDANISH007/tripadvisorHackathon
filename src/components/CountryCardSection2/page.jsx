'use client'
import React, { useState, useEffect, useRef } from 'react'
import ImageData from '@/asset/imagesData/section4.json'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const CountryCardSection2 = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft - 300,
        behavior: 'smooth'
      });
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 300,
        behavior: 'smooth'
      });
    }
  }

  // Check scroll position on mount and on scroll
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      
      // Show left arrow only if scrolled to the right
      setShowLeftArrow(scrollLeft > 0)
      
      // Show right arrow only if there's more content to scroll right
      // Add a small buffer (1px) to handle potential rounding issues
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    
    // Initial check
    checkScrollPosition()
    
    // Add event listener
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition)
    }
    
    // Clean up
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition)
      }
    }
  }, [])

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

      {/* Scroll Section with relative container for buttons */}
      <div className='relative'>
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className='scroll-container flex gap-4 overflow-x-auto scrollbar-hide pb-4 w-full'
        >
          {ImageData.map((item, index) => (
            <div
              key={index}
              className='min-w-[272px] w-[272px] flex-shrink-0 rounded-lg overflow-hidden'
            >
              <div className='relative group cursor-pointer before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-10'>
                <Image
                  src={item.image}
                  width={272}
                  height={300}
                  alt={item.title}
                  className='w-full rounded-lg'
                />
              </div>
                
              {/* Badges below image - SMALLER SIZE */}
              <div className='mt-2 flex flex-wrap gap-2'>
                {(item.bestseller || item.bestSeller) && (
                  <div className='inline-block bg-white text-black border text-xs font-semibold px-2 py-0.5 rounded-md'>
                    <span className='font-bold text-sm'> Best Seller </span>
                  </div>
                )}

                {item['likely to sell out'] && (
                  <div className='inline-block bg-white text-black border text-xs font-semibold px-2 py-0.5 rounded-md'>
                    <span className='font-bold text-sm'>
                      Likely to Sell Out
                    </span>
                  </div>
                )}
              </div>

              {/* Title and description */}
              <div className='mt-2 space-y-1'>
                <h1 className='font-semibold text-xl'>
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

        {/* Left Arrow - positioned to align with images */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className='absolute left-0 top-[150px] -ml-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          >
            <IoIosArrowRoundBack size={30} className="mx-auto" />
          </button>
        )}

        {/* Right Arrow - positioned to align with images */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className='absolute right-0 top-[150px] -mr-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          >
            <IoIosArrowRoundForward size={30} className="mx-auto" />
          </button>
        )}
      </div>
    </div>
  )
}

export default CountryCardSection2
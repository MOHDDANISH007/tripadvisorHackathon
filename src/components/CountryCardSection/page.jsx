<<<<<<< HEAD
'use client'
import React from 'react'
=======
"use client"
import React, { useState, useEffect, useRef } from 'react'
>>>>>>> mobasshir
import ImageData from '@/asset/imagesData/section3.json'
import Image from 'next/image'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const CountryCardSection = () => {
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
    <div className='px-4 md:px-16 py-10 bg-white relative'>
      {/* Heading */}
      <div className='mb-5 text-center md:text-left'>
        <h1 className='text-2xl md:text-2xl font-semibold'>
          Explore the world's most stunning seasides
        </h1>
        <p className='text-md text-gray-600 mt-2'>
          2025's Travellers' Choice Awards Best of the Best Beaches
        </p>
      </div>

      {/* Scroll Section with negative margin container for buttons */}
      <div className='relative'>
        {/* Cards Container */}
        <div 
          ref={scrollContainerRef}
          className='scroll-container flex gap-4 overflow-x-auto scrollbar-hide pb-4 w-full'
        >
          {ImageData.map((item, index) => (
            <div
              key={index}
              className='min-w-[calc(25% - 18px)] flex-shrink-0 bg-white rounded-md shadow-lg overflow-hidden relative'
            >
              <div className='relative before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:z-10 cursor-pointer'>

                <Image
                  src={item.image}
                  alt={item.title}
                  width={272}
                  height={300}
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent px-4 py-4 rounded-b-md'>
                  <h2 className='text-3xl font-bold text-white'>{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Left Arrow - Changed to always be visible */}
        <button
          onClick={scrollLeft}
          className='flex items-center justify-center absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-50
    w-12 h-12 bg-white/90 border-2 rounded-full 
    hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          style={{ pointerEvents: 'auto' }}
        >
          <IoIosArrowRoundBack size={30} />
        </button>

        <button
          onClick={scrollRight}
          className='flex items-center justify-center absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-50
    w-12 h-12 bg-white/90 border-2 rounded-full 
    hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          style={{ pointerEvents: 'auto' }}
        >
          <IoIosArrowRoundForward size={30} />
        </button>
=======
        {/* Left Arrow - positioned to overlap */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className='absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          >
            <IoIosArrowRoundBack size={30} className="mx-auto" />
          </button>
        )}

        {/* Right Arrow - positioned to overlap */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className='absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10
              w-12 h-12 bg-white/90 border-2 rounded-full 
              hover:bg-black hover:text-white transition-all duration-300 shadow-lg'
          >
            <IoIosArrowRoundForward size={30} className="mx-auto" />
          </button>
        )}
>>>>>>> mobasshir
      </div>
    </div>
  )
}

export default CountryCardSection

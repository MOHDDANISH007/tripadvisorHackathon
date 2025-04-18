'use client'

import React from 'react'
import { RiHomeLine } from 'react-icons/ri'
import { BiHotel } from 'react-icons/bi'
import { CiCamera } from 'react-icons/ci'
import { IoRestaurantOutline } from 'react-icons/io5'
import { MdFlight, MdOutlineHolidayVillage } from 'react-icons/md'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'

const Hero = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center mt-20'>
      <h1 className='text-4xl sm:text-6xl font-bold text-center'>Where to?</h1>

      {/* Show horizontal scroll only below or equal lg */}
      <div className='w-full px-4 overflow-x-auto lg:overflow-x-auto xl:overflow-x-visible scrollbar-x pb-6'>
        <div className='flex gap-12 min-w-[700px] xl:min-w-0 justify-center '>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <RiHomeLine size={30} />
              <p className='text-base sm:text-xl'>Search All</p>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <BiHotel size={30} />
              <p className='text-base sm:text-xl'>Hotels</p>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <CiCamera size={30} />
              <p className='text-base sm:text-xl'>Things to do</p>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <IoRestaurantOutline size={30} />
              <p className='text-base sm:text-xl'>Restaurants</p>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <MdFlight size={30} />
              <p className='text-base sm:text-xl'>Flights</p>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-green-600 hover:text-green-600 dark:hover:border-black dark:hover:text-black'>
              <MdOutlineHolidayVillage size={30} />
              <p className='text-base sm:text-xl'>Holiday Homes</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className='hidden md:block'>
        <div className='w-[800px] max-w-full px-4 relative'>
          {/* Input wrapper */}
          <div className='relative border border-gray-300 rounded-[50px]'>
            {/* Search Icon */}
            <CiSearch
              className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500'
              size={24}
            />

            {/* Input Field */}
            <input
              type='text'
              placeholder='Search for a place'
              className='w-full pl-14 pr-28 py-4 rounded-[50px] focus:outline-none focus:border-blue-500'
            />

            {/* Search Button */}
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-[30px] hover:bg-green-400'>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='block md:hidden px-4 w-[700px] max-w-full mx-auto'>
        <div className='bg-white shadow-md rounded-2xl p-6 relative flex flex-col gap-4'>
          {/* Search Icon */}
          <CiSearch
            className='absolute left-8 top-[52px] transform -translate-y-1/2 text-gray-400'
            size={22}
          />

          {/* Input Field */}
          <input
            type='text'
            placeholder='Search for a place'
            className='w-full pl-12 pr-4 py-3 border-b-2 border-gray-200 rounded-full focus:outline-none '
          />

          {/* Search Button */}
          <button className='w-full py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

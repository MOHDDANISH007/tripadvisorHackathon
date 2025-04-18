'use client'

import React, { useState } from 'react'
import { RiHomeLine } from 'react-icons/ri'
import { BiHotel } from 'react-icons/bi'
import { CiCamera } from 'react-icons/ci'
import { IoRestaurantOutline } from 'react-icons/io5'
import { MdFlight } from 'react-icons/md'
import { BsHouseDoor } from 'react-icons/bs'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('search-all')

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-15'>
      <h1 className='text-5xl font-extrabold text-center mb-10'>Where to?</h1>

      {/* Navigation Tabs */}
      <div className='w-full max-w-4xl'>
        <div className='flex flex-wrap justify-center'>
          <div className='flex w-full justify-between px-4 md:px-0 overflow-x-auto scrollbar-hide'>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('search-all')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'search-all' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <RiHomeLine size={20} />
                <p className='whitespace-nowrap'>Search All</p>
              </div>
            </Link>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('hotels')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'hotels' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <BiHotel size={20} />
                <p className='whitespace-nowrap'>Hotels</p>
              </div>
            </Link>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('things-to-do')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'things-to-do' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <CiCamera size={20} />
                <p className='whitespace-nowrap'>Things to Do</p>
              </div>
            </Link>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('restaurants')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'restaurants' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <IoRestaurantOutline size={20} />
                <p className='whitespace-nowrap'>Restaurants</p>
              </div>
            </Link>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('flights')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'flights' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <MdFlight size={20} />
                <p className='whitespace-nowrap'>Flights</p>
              </div>
            </Link>
            <Link href='/'>
              <div 
                onClick={() => handleTabClick('vacation-rentals')}
                className={`text-lg font-semibold flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 ${activeTab === 'vacation-rentals' ? 'border-black font-medium' : 'border-transparent hover:border-black hover:text-neutral-800'}`}
              >
                <BsHouseDoor size={20} />
                <p className='whitespace-nowrap'>Vacation Rentals</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className='w-full max-w-4xl px-4'>
        <div className='relative bg-white rounded-full shadow-lg border-2 border-neutral-200'>
          {/* Search Icon */}
          <CiSearch
            className='absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400'
            size={24}
          />

          {/* Input Field */}
          <input
            type='text'
            placeholder='Places to go, things to do, hotels...'
            className='w-full pl-14 pr-32 py-4 rounded-full focus:outline-none'
          />

          {/* Search Button */}
          <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#11d98f] cursor-pointer text-black px-8 py-3 rounded-full hover:bg-[#81e5c0]  transition-all duration-200 font-medium'>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
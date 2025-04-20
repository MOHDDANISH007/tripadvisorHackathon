'use client'
import React from 'react'
import Image from 'next/image'

const TravelerChoice = () => {
  return (
    <div className='px-4 md:px-16 py-10 bg-[#FFF7E3]'>
      <div className='flex justify-between flex-col md:flex-row items-center gap-10'>
        {/* Logo Image with Text Below */}
        <div className='flex flex-col justify-center items-center text-center max-w-md'>
          <Image
            src='https://static.tacdn.com/img2/travelers_choice/2023/TC_badge_yellow.svg'
            alt='golden owl logo'
            width={150}
            height={150}
            className='max-w-full'
          />
          <div className='mt-4'>
            <h1 className='text-3xl md:text-4xl font-bold leading-snug'>
              Traveler's Choice Awards Best of the Best
            </h1>

            <p className='text-xl md:text-2xl mt-2'>
              Among our top 1% of places, stays, eats, and experiences — decided
              by you
            </p>
          </div>

          <div className='mt-5 leading-snug px-5'>
            <button className='cursor-pointer bg-black text-white px-8 py-2 rounded-full'>
              <span className='font-bold text-lg'> See the winners </span>
            </button>
          </div>
        </div>

        {/* Background Image */}
        <div className='flex justify-center items-center'>
          <Image
            src='https://static.tacdn.com/img2/brand/feed/tc_cards_2025.png'
            alt='background image'
            width={650}
            height={650}
          />
        </div>
      </div>
    </div>
  )
}

export default TravelerChoice

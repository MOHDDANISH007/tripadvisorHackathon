'use client'

import Image from 'next/image'
import React from 'react'
import ImageData from '@/asset/logoImage/logo.js'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiGlobalLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import { MdDarkMode } from 'react-icons/md'

const Header = () => {
  const menuData = ['Discover', 'Trip', 'Review', 'Forums']
  const [dark, setDark] = React.useState(false);

  const HandleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-sm ${dark ? 'bg-black/80 text-white' : 'bg-white/80 text-black'}`}>
      <div className='relative flex items-center justify-between px-4 py-3 max-w-[1280px] mx-auto'>
        {/* Hamburger (mobile) */}
        <div className='md:hidden absolute left-4 top-1/2 -translate-y-1/2'>
          <RxHamburgerMenu size={26} className={dark ? 'text-white' : 'text-gray-700'} />
        </div>

        {/* Logo */}
        <div className='mx-auto md:mx-0 flex-shrink-0'>
          <Image src={ImageData.image} alt='logo' width={160} height={160} />
        </div>

        {/* Navigation */}
        <div className='hidden md:flex flex-1 justify-center gap-8'>
          {menuData.map((item, i) => (
            <p key={i} className={`text-lg font-bold transition-colors cursor-pointer ${dark ? 'text-white' : 'text-black'}`}>
              {item}
            </p>
          ))}
        </div>

        {/* Right Side: Desktop Buttons */}
        <div className='hidden md:flex items-center gap-4'>
          {/* Currency Button */}
          <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${dark ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-green-100'}`}>
            <RiGlobalLine size={22} />
            <span className='font-semibold'>| INR</span>
          </button>

          {/* Sign Button */}
          <button className='flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-semibold text-lg hover:bg-green-600 transition'>
            Sign
          </button>
        </div>

        {/* Mobile View: Account Button */}
        <div className='md:hidden absolute right-4 top-1/2 -translate-y-1/2'>
          <button className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition ${dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-green-600'}`}>
            <VscAccount size={20} />
          </button>
        </div>

        {/* Dark Mode Button */}
        <div className='absolute md:-right-5 right-12'>
          <MdDarkMode size={26} onClick={HandleDarkMode} className='cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Header

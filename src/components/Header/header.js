'use client'

import Image from 'next/image'
import React, { useEffect ,useState} from 'react'
import ImageData from '@/asset/logoImage/logo.js'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiGlobalLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import { MdDarkMode } from 'react-icons/md'
import Link from 'next/link'

const Header = () => {
  const menuData = [{ name:'Discover', path:'/'},
    {name:'Trips',path:'/'},
    {name: 'Review',path:'/'}, 
    {name: 'Forums',path:'/'},
    {name: 'Gallery',path:'gallery'},
    {name: 'Ask a local',path:'askLocal'},]
    
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const HandleDarkMode = () => {
    setDark(!dark)
  }

  // Apply global dark mode class to body when dark mode is toggled
  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark'); // Add dark class to body
    } else {
      document.body.classList.remove('dark'); // Remove dark class from body
    }
  }, [dark]); // This effect runs every time `dark` state changes

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50  ${
      dark ? 'bg-black text-white' : 'bg-white text-black'
    } ${scrolled ? 'top-0 border-b border-gray-200 shadow-sm' : ''}`}>
      <div className='relative flex items-center justify-between px-4 py-2 max-w-[1280px] mx-auto'>
        {/* Hamburger (mobile) */}
        <div className='md:hidden absolute left-4 top-1/2 -translate-y-1/2'>
          <RxHamburgerMenu size={26} className={dark ? 'text-white' : 'text-gray-700'} />
        </div>

        {/* Logo */}
        <div className='pl-12 mx-auto md:mx-0 flex-shrink-0 '>
          <Image src={ImageData.image} alt='logo' width={190} height={190} />
        </div>

        {/* Navigation */}
        <div className='hidden md:flex flex-1 justify-center gap-1'>
          {menuData.map((item, i) => (
            <Link key={i} 
           href={item.path} 
            className={`text-md font-semibold px-3.5 py-2 rounded-full transition-colors cursor-pointer hover:bg-gray-100 ${dark ? 'text-white' : 'text-black'}`}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Desktop Buttons */}
        <div className='hidden md:flex items-center gap-4 pr-5'>
          {/* Currency Button */}
          <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100 cursor-pointer'}`}>
            <RiGlobalLine size={22} />
            <span className='font-semibold'>| USD</span>
          </button>

          {/* Sign Button */}
          <button className='flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-semibold text-lg hover:bg-neutral-800 transition duration-300 ease-in-out cursor-pointer'>
            Sign in
          </button>
           {/* Dark Mode Button */}
        <div className=''>
          <MdDarkMode size={26} onClick={HandleDarkMode} className='cursor-pointer' />
        </div>
        </div>

        {/* Mobile View: Account Button */}
        <div className='md:hidden absolute right-4 top-1/2 -translate-y-1/2'>
          <button className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition ${dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-green-600'}`}>
            <VscAccount size={20} />
          </button>
        </div>

       
      </div>
    </header>
  )
}

export default Header

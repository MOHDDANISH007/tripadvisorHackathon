'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageData from '@/asset/logoImage/logo.js'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiGlobalLine, RiHomeLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import { MdDarkMode, MdFlight, MdFiberNew } from 'react-icons/md'
import { CiSearch, CiCamera } from 'react-icons/ci'
import { BiHotel } from 'react-icons/bi'
import { IoRestaurantOutline } from 'react-icons/io5'
import { BsHouseDoor } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const hideCategoryTabs = ['/gallery', '/askLocal'].includes(pathname)

  const menuData = [
    { name: 'Discover', path: '/' },
    { name: 'Trips', path: '/' },
    { name: 'Review', path: '/' },
    { name: 'Forums', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Ask a local', path: '/askLocal' },
  ]

  const categoryTabs = [
    { name: 'Explore', path: '/', icon: RiHomeLine },
    { name: 'Hotels', path: '/', icon: BiHotel },
    { name: 'Things to Do', path: '/', icon: CiCamera },
    { name: 'Restaurants', path: '/', icon: IoRestaurantOutline },
    { name: 'Flights', path: '/', icon: MdFlight },
    { name: 'Vacation Rentals', path: '/', icon: BsHouseDoor },
  ]

  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [transformedHeader, setTransformedHeader] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Explore')

  const HandleDarkMode = () => {
    setDark(!dark)
  }

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName)
  }

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    window.registerSearchBar = (searchBarElement) => {
      if (!searchBarElement) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          setTransformedHeader(!entry.isIntersecting)
        },
        { threshold: 0, rootMargin: '-90px 0px 0px 0px' }
      )

      observer.observe(searchBarElement)

      return () => {
        observer.unobserve(searchBarElement)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      delete window.registerSearchBar
    }
  }, [])

  return (
    <div className={`sticky top-0 z-50 ${transformedHeader ? (dark ? 'border-b border-gray-800' : 'border-b border-gray-200 shadow-sm') : ''}`}>
      <header className={`transition-all duration-300 ${dark ? 'bg-black text-white' : 'bg-white text-black'} ${scrolled && !transformedHeader ? ' border-gray-200 shadow-sm' : ''}`}>
        <div className='relative flex items-center justify-between px-4 py-2 max-w-[1280px] mx-auto'>
          <div className='lg:hidden absolute left-4 top-1/2 -translate-y-1/2'>
            <RxHamburgerMenu size={26} className={dark ? 'text-white' : 'text-gray-700'} />
          </div>

          <div className={`pl-12 transition-all duration-300 flex-shrink-0 ${transformedHeader ? 'mx-0' : 'mx-auto md:mx-0'}`}>
            <Image 
              src={dark ? ImageData.dark : ImageData.light} 
              alt='logo' 
              width={transformedHeader ? 140 : 190} 
              height={transformedHeader ? 140 : 190} 
              className="transition-all duration-300"
            />
          </div>

          {transformedHeader && (
            <div className='hidden md:flex flex-1 max-w-xl mx-4'>
              <div className='relative w-full bg-white rounded-full border border-gray-200'>
                <CiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
                <input
                  type='text'
                  placeholder='Search'
                  className={`w-full pl-12 pr-4 py-2 rounded-full focus:outline-none ${dark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                />
              </div>
            </div>
          )}

          <div className={`hidden lg:flex ${transformedHeader ? 'justify-end' : 'flex-1 justify-center'} gap-1`}>
            {menuData.map((item, i) => {
              const showNewIcon = ['/gallery', '/askLocal'].includes(item.path)
              return (
                <div key={i} className="relative">
                  <Link
                    href={item.path}
                    className={`text-md font-semibold px-3 py-2 rounded-full transition-colors cursor-pointer hover:bg-gray-100 ${
                      dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {showNewIcon && (
                    <MdFiberNew className="animate-pulse absolute -top-2 -right-1 text-red-600" size={18} />
                  )}
                </div>
              )
            })}
          </div>

          <div className='hidden md:flex items-center gap-4 pr-5'>
            {(!transformedHeader || typeof window !== 'undefined' && window.innerWidth > 1280) && (
              <div className='hidden lg:flex'>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                    dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-gray-100 cursor-pointer'
                  }`}
                >
                  <RiGlobalLine size={22} />
                  <span className='font-semibold'>| USD</span>
                </button>
              </div>
            )}

            <button className='ml-2 flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-semibold text-lg hover:bg-neutral-800 transition duration-300 ease-in-out cursor-pointer'>
              Sign in
            </button>

            {/* Dark Mode Toggle with NEW icon */}
            <div className="relative">
              <MdDarkMode
                size={26}
                onClick={HandleDarkMode}
                className='cursor-pointer'
              />
              <MdFiberNew className="animate-pulse absolute -top-2 -right-2 text-red-600" size={18} />
            </div>
          </div>

          <div className='flex md:hidden absolute right-4 top-1/2 -translate-y-1/2'>
            {/* Mobile Dark Mode Toggle with NEW icon */}
            <div className="relative mt-1">
              <MdDarkMode
                size={26}
                onClick={HandleDarkMode}
                className='cursor-pointer'
              />
              <MdFiberNew className="absolute -top-2 -right-2 text-red-600" size={18} />
            </div>
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition ${
                dark ? 'text-white hover:bg-gray-800' : 'text-black hover:bg-green-600'
              }`}
            >
              <VscAccount size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      {transformedHeader && !hideCategoryTabs && (
        <div className={`transition-all duration-300 py-1 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <div className='max-w-[1280px] mx-auto px-4'>
            <div className='pl-12 flex space-x-6 overflow-x-auto'>
              {categoryTabs.map((category, index) => (
                <Link key={index} href={category.path}>
                  <div 
                    onClick={() => handleCategoryClick(category.name)}
                    className={`text-sm md:text-md font-medium flex items-center gap-2 px-2 py-2 cursor-pointer border-b-2 transition-colors ${
                      activeCategory === category.name 
                        ? 'border-black font-medium' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <category.icon size={18} />
                    <p className='whitespace-nowrap'>{category.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header

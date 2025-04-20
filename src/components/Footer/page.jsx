import Image from 'next/image'
import React from 'react'

// Importing logo data from JSON
import logoImage from '@/asset/imagesData/section8.json'

// React Icons
import { IoIosArrowDown } from 'react-icons/io'
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { FaPinterest } from 'react-icons/fa'
import { AiOutlineTikTok } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      {/* Desktop Footer */}
      <div className='bg-[#F2F2F2] px-10 py-10 mt-20 footer-container hidden lg:block'>
        <div>
          {/* 1st div */}
          <div className='flex gap-14 justify-between items-start leading-loose text-[15px] text-[#333] font-medium footer-desktop'>
            {/* Column 1 */}
            <div className='space-y-2'>
              <h1 className='cursor-pointer text-xl'>About Tripadvisor</h1>
              <h1 className='cursor-pointer text-xl'>About Us</h1>
              <h1 className='cursor-pointer text-xl'>Press</h1>
              <h1 className='cursor-pointer text-xl'>Resources and Policies</h1>
              <h1 className='cursor-pointer text-xl'>Career</h1>
              <h1 className='cursor-pointer text-xl'>Investors Relations</h1>
              <h1 className='cursor-pointer text-xl'>Trust & Safety</h1>
              <h1 className='cursor-pointer text-xl'>Contact Us</h1>
              <h1 className='cursor-pointer text-xl'>Accessibility</h1>
              <h1 className='cursor-pointer text-xl'>Bug Bounty Program</h1>
            </div>

            {/* Column 2 */}
            <div className='space-y-2'>
              <h1 className='cursor-pointer text-xl '>Explore</h1>
              <h1 className='cursor-pointer text-xl '>Write a review</h1>
              <h1 className='cursor-pointer text-xl '>Add a Place</h1>
              <h1 className='cursor-pointer text-xl '>Join</h1>
              <h1 className='cursor-pointer text-xl '>Traveler's Choice</h1>
              <h1 className='cursor-pointer text-xl '>Help Center</h1>
              <h1 className='cursor-pointer text-xl '>Travel Stories</h1>
            </div>

            {/* Column 3 */}
            <div className='space-y-2'>
              <h1 className='cursor-pointer text-xl'>Do Business With Us</h1>
              <h1 className='cursor-pointer text-xl'>Owners</h1>
              <h1 className='cursor-pointer text-xl'>Bussiness Advantages</h1>
              <h1 className='cursor-pointer text-xl'>Sponsored Placements</h1>
              <h1 className='cursor-pointer text-xl'>Advertise With Us</h1>
              <h1 className='cursor-pointer text-xl'>Access Our Context API</h1>
              <h1 className='cursor-pointer text-xl'>Become an Affiliate</h1>
              <h1 className='cursor-pointer text-xl'>Get The App</h1>
              <h1 className='cursor-pointer text-xl'>Iphone App</h1>
              <h1 className='cursor-pointer text-xl'>Android App</h1>
            </div>

            {/* Column 4 */}
            <div className='space-y-2'>
              <h1 className='cursor-pointer text-xl'>Tripadvisor Sites</h1>
              <h1 className='cursor-pointer text-xl'>
                Book the best restaurants with the{' '}
                <span className='font-semibold'>TheFork</span>
              </h1>
              <h1 className='cursor-pointer text-xl'>
                Book tour and attraction tickets{' '}
                <span className='font-semibold'>onViator</span>
              </h1>
              <h1 className='cursor-pointer text-xl'>
                Read cruises reviews on{' '}
                <span className='font-semibold'>Cruises Critics</span>
              </h1>
              <h1 className='cursor-pointer text-xl'>
                Get airline seating charts on{' '}
                <span className='font-semibold'>Seat Guru</span>
              </h1>
              <h1 className='cursor-pointer text-xl'>
                Search for holidays rentals on{' '}
                <span className='font-semibold'>Holiday Lettings</span>
              </h1>
            </div>
          </div>

          {/* 2nd div */}
          <div className='mt-10 flex justify-between items-center text-[14px] font-medium '>
            {/* Logo */}
            <div>
              <Image
                src={logoImage[0].image}
                alt={logoImage[0].title || 'Logo'}
                width={50}
                height={50}
              />
            </div>

            {/* Links */}
            <div className='flex flex-wrap gap-4 text-[#222] px-5 leading-0.5 text-xl footer-desktop'>
              <h1 className='underline cursor-pointer text-xl'>Terms of Use</h1>
              <h1 className='underline cursor-pointer text-xl'>
                Privacy and Cookies Statement
              </h1>
              <h1 className='underline cursor-pointer text-xl'>
                Cookies consent
              </h1>
              <h1 className='underline cursor-pointer text-xl'>Site Map</h1>
              <h1 className='underline cursor-pointer text-xl'>
                How the site works
              </h1>
              <h1 className='underline cursor-pointer text-xl'>Contact Us</h1>
            </div>

            {/* Currency and Country Buttons */}
            <div className='flex gap-4 mb-10'>
              <button className='bg-[#e0e0e0] px-4 py-2 min-w-[180px] text-lg font-bold cursor-pointer flex justify-between items-center rounded-md'>
                <span className='footer-button'>$ USD</span>
                <IoIosArrowDown className='text-gray-500 text-lg' />
              </button>
              <button className='bg-[#e0e0e0] px-4 py-2 min-w-[180px] text-lg font-bold cursor-pointer flex justify-between items-center rounded-md'>
                <span className='footer-button'>United States</span>
                <IoIosArrowDown className='text-gray-500 text-lg' />
              </button>
            </div>
          </div>

          {/* 3rd div */}
          <div className='flex items-center justify-between mt-10'>
            <div className='max-w-[70%] mt-4'>
              <p className='text-[14px]'>
                This is the version of our website addressed to speakers of
                English in India. If you are a resident of another country or
                region, please select the appropriate version of Tripadvisor for
                your country or region in the drop-down menu.{' '}
                <span className='cursor-pointer underline font-bold'>show more</span>
              </p>
            </div>

            <div className='flex gap-10 mt-4'>
              <IoLogoFacebook className='cursor-pointer' size={30} />
              <FaXTwitter className='cursor-pointer' size={30} />
              <IoLogoInstagram className='cursor-pointer' size={30} />
              <IoLogoYoutube className='cursor-pointer' size={30} />
              <AiOutlineTikTok className='cursor-pointer' size={30} />
              <FaPinterest className='cursor-pointer' size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className='bg-[#F2F2F2] px-10 py-10 mt-20 mobile-footer lg:hidden'>
        {/* 1st div */}
        <div className='flex flex-col gap-4 footer-button1 leading-loose text-[15px] text-[#333] font-medium footer-mobile'>
          <h1 className='cursor-pointer text-xl'>
            {' '}
            <span>+</span> About Tripadvisor
          </h1>
          <h1 className='cursor-pointer text-xl'>
            {' '}
            <span>+</span> Explore
          </h1>
          <h1 className='cursor-pointer text-xl'>
            {' '}
            <span>+</span> Do Business
          </h1>
          <h1 className='cursor-pointer text-xl'>
            {' '}
            <span>+</span> Get The App
          </h1>
          <h1 className='cursor-pointer text-xl'>
            {' '}
            <span>+</span> Tripadvisor Sites
          </h1>
        </div>

        {/* 2nd div */}
        <div className='mt-10 flex flex-wrap gap-4 justify-between items-center text-[14px] font-medium sm:flex-col md:flex-row'>
          {/* Currency Dropdown */}
          <div className='w-full md:w-[48%] bg-white px-6 py-2 cursor-pointer mt-4 border-2 flex items-center justify-between border-gray-300 rounded-2xl'>
            <span className='text-lg'>$ USD</span>
            <IoIosArrowDown className='text-gray-500 text-lg' size={24} />
          </div>

          {/* Country Dropdown */}
          <div className='w-full md:w-[48%] bg-white px-6 py-2 cursor-pointer mt-4 border-2 flex items-center justify-between border-gray-300 rounded-2xl'>
            <span className='text-lg'>United States</span>
            <IoIosArrowDown className='text-gray-500 text-lg' size={24} />
          </div>
        </div>

        {/* 3rd div */}
        <div className='mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 px-4'>
          {/* Logo */}
          <div className='text-xl font-bold'>
            {/* Add your logo or logo text here */}
          </div>

          {/* Social Icons */}
          <div className='flex flex-wrap justify-center sm:justify-end gap-6'>
            <IoLogoFacebook className='cursor-pointer' size={30} />
            <FaXTwitter className='cursor-pointer' size={30} />
            <IoLogoInstagram className='cursor-pointer' size={30} />
            <IoLogoYoutube className='cursor-pointer' size={30} />
            <AiOutlineTikTok className='cursor-pointer' size={30} />
            <FaPinterest className='cursor-pointer' size={30} />
          </div>
        </div>

        {/* 4th div */}
        <div className='mt-10 flex flex-row items-center justify-center'>
          <div>
            <Image
              src={logoImage[0].image}
              alt={logoImage[0].title || 'Logo'}
              width={50}
              height={50}
            />
          </div>

          <div className='flex flex-wrap gap-4 mt-4 footer-button1 space-y-2 text-[#222] px-5 leading-0.5 text-xl footer-mobile'>
            <h1 className='underline cursor-pointer'>Terms of Use</h1>
            <h1 className='underline cursor-pointer'>
              Privacy and Cookies Statement
            </h1>
            <h1 className='underline cursor-pointer'>Cookie consent</h1>
            <h1 className='underline cursor-pointer'>Site Map</h1>
            <h1 className='underline cursor-pointer'>How the site works</h1>
            <h1 className='underline cursor-pointer'>Contact Us</h1>
          </div>
        </div>

        {/* 5th div */}

        <div>
          <div className='max-w-[90%] mt-4'>
            <p className='text-[14px]'>
              This is the version of our website addressed to speakers of
              English in India. If you are a resident of another country or
              region, please select the appropriate version of Tripadvisor for
              your country or region in the drop-down menu.{' '}
              <span className='cursor-pointer underline font-bold'>Show more</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

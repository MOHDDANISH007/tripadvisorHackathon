import React from 'react'
import Image from 'next/image'
import ImageData from '@/asset/imagesData/section2.json'
import LogoImage from '@/asset/logoImage/logo.js'

const CardSection3 = () => {
  return (
    <div className='relative  card-container1  md:px-16 py-16 w-full  text-black overflow-x-hidden'>
      <div className='relative  flex gap-5 p-5 justify-evenly items-center lg:flex-row flex-col  bg-[rgb(237,238,250)]'>
        {/* Mobile: Sponsored by on top */}
        <div className='relative flex gap-5 justify-center items-center mx-auto md:hidden'>
          <Image
            src={LogoImage.light}
            alt={LogoImage.title}
            width={170}
            height={140}
          />
          <h1 className='font-bold text-sm text-gray-400'>
            Sponsored by{' '}
            <span className='font-bold text-sm underline text-gray-400'>
              CESAR
            </span>
          </h1>
        </div>

        {/* Image Section */}
        <div>
          {ImageData.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                />
              </div>
            )
          })}
        </div>

        {/* Content Section */}
        <div>
          {/* Desktop: Sponsored by inside content */}
          <div className='hidden md:flex gap-5 justify-center items-center mx-auto'>
            <Image
              src={LogoImage.image}
              alt={LogoImage.title}
              width={200}
              height={200}
            />
            <h1 className='font-bold text-xl text-gray-400'>
              Sponsored by{' '}
              <span className='font-bold text-2xl underline text-gray-400'>
                CESAR
              </span>
            </h1>
          </div>

          <div className='mt-5 max-w-sm'>
            <h1 className='font-bold text-4xl text-black'>
              It's easier than ever to go together
            </h1>
          </div>
          <div className='mt-5 max-w-sm'>
            <p className='mt-5 text-gray-400 text-2xl'>
              Travel is better when then can share it with you best friend. Find
              all the tip, guides, and tools you need to take a dream trip with
              your dog.
            </p>
          </div>
          <div className='mt-5'>
            <button className='bg-black text-white font-semibold text-2xl px-5 py-2 rounded-full cursor-pointer'>
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection3

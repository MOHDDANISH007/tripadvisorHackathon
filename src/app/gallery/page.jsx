'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from "next/image";
import Logoimage from "../../asset/greenLogo.svg";
import conf from "../../conf"


const UnsplashMasonry = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchImages = async (page = 1) => {
    setLoading(true)
    try {
      const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'tourism travel trip',
          per_page: 25,
          page: page
        },
        headers: {
          Authorization: `Client-ID ${conf.unsplashAccessKey}` 
        }
      })

      setImages(res.data.results)
      setTotalPages(Math.ceil(res.data.total / 25))
      setCurrentPage(page)

      // Log location of each photo after fetching data
      res.data.results.forEach(photo => {
        const location = photo.user?.location || 'Unknown Location'
        console.log(`Location: ${location}`)
      })
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages(currentPage)
  }, [])

  const handlePrevPage = () => {
    if (currentPage > 1) {
      fetchImages(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      fetchImages(currentPage + 1)
    }
  }

  return (
    <div className='gallery-cards p-4'>
      {loading ? (
        <div className='flex justify-center items-center min-h-64'>
          
            <Image
                      src={Logoimage}
                      alt="Loading..."
                      width={48}
                      height={48}
                      className="animate-bounce"
                    />
          
        </div>
      ) : (
        <>
          <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-8'>
            {images.map(img => (
              <div
                key={img.id}
                className='relative w-full overflow-hidden rounded-lg group mb-4'
              >
                <img
                  src={img.urls.small}
                  alt={img.alt_description || 'Travel'}
                  className='w-full rounded-lg transition-transform duration-300 group-hover:scale-105'
                />
                {/* Vignette overlay that appears on hover */}
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg'></div>

                {/* Location text at bottom left */}
                <div className='absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'>
                  <p className='text-white text-lg font-medium drop-shadow-lg'>
                    {img.user?.location || 'Unknown Location'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className='flex justify-center items-center space-x-4 my-8'>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className='px-4 py-2 bg-black text-white rounded-3xl disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-800 transition-colors'
            >
              Previous
            </button>
            <span className='text-lg font-medium'>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='px-4 py-2 bg-black text-white rounded-3xl disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-800 transition-colors'
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default UnsplashMasonry

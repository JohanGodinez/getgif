import React from 'react'

export const GifGridItem = ({ title, url }) => {
  return (
    <>
      <div className='bg-gray-100 rounded-md mx-2 mb-10'>
        <img src={url} alt={title} />
        <p className='text-gray-800 text-center'>{title}</p>
      </div>
    </>
  )
}

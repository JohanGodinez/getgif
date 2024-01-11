import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  return (
    <>
      <h2 className='text-2xl mb-4'>GifExpertApp</h2>
      <hr className='mb-4' />
      <AddCategorie setCategories={setCategories} />
      <br />
      <ol>
        {categories.map((item, i) => (
          <GifGrid key={item + i} className='text-lg' category={item} />
        ))}
      </ol>
    </>
  )
}

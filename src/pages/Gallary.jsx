import React from 'react'
import HomeGallary from '../components/Home/HomeGallary'
import GallaryHero from '../components/Gallary/GallaryHero'

const Gallary = () => {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <GallaryHero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        <HomeGallary/>
      </div>
    </div>
  )
}

export default Gallary

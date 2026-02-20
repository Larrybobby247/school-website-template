import React from 'react'
import heroImg from '../../assets/hero-img.jpg'

const Hero = () => {
  return (
    <div className='h-[90vh] relative flex items-center hero'>
      <img src={heroImg} alt="" className='h-full w-full object-cover' />
      <div className='absolute mx-8 md:mx-16 lg:mx-20 flex flex-col gap-4 text-white z-2 md:w-[50%]'>
        <h1 className='text-[40px] font-bold'>School headline</h1>
        <p className='text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat ut quod in rem neque soluta sint ullam dolorem eligendi?</p>
        <button className='btn-primary'>Apply now</button>
      </div>
    </div>
  )
}

export default Hero

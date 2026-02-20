import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AboutImg from '../../assets/about-img.jpg'
import React from 'react'

const AboutHome = () => {

  return (
    <div className='flex flex-col gap-6 lg:flex-row items-center'>
      <div className='flex flex-col gap-4 '>
        <h3 className='text-xl text-navy'>About Us</h3>
        <h1 className='text-3xl font-medium'>Welcome to <span className='text-navy'>Methodist School</span>, a school of <span className='text-navy'>Knowledge</span></h1>
        <p className='text-grey text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi asperiores modi ipsa nemo dolorum architecto soluta deleniti sequi voluptatum ducimus.</p>
        
      </div>
      <div className='w-full'>
        <img src={AboutImg} alt="" className='h-[400px] w-full object-cover rounded-sm' />
      </div>
    </div>
  )
}

export default AboutHome

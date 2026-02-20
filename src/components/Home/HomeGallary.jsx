import React from 'react'
import Library from '../../assets/library.jpg'
import Canteen from '../../assets/canteen.jpg'
import Playground from '../../assets/playground.jpg'
import IctCenter from '../../assets/about-img.jpg'

const HomeGallary = () => {
  return (
    <div>
      <h1 className='section-header'>Gallary</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-4'>
            <img src={Canteen} alt="" className='md:w-[40%] h-[300px] object-cover rounded-sm'/>
            <img src={Library} alt="" className='md:w-[60%] h-[300px] object-cover rounded-sm'/>
        </div>
        <div className='flex flex-col md:flex-row gap-4'>
            <img src={IctCenter} alt="" className='md:w-[60%] h-[300px] object-cover rounded-sm'/>
            <img src={Playground} alt="" className='md:w-[40%] h-[300px] object-cover rounded-sm'/>
        </div>
      </div>
    </div>
  )
}

export default HomeGallary

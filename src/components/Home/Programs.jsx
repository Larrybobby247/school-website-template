import React from 'react'
import Img1 from '../../assets/nursery.jpg'
import Img2 from '../../assets/primary.jpg'
import Img3 from '../../assets/secondary.jpg'

const Programs = () => {
  return (
    <div>
      <h1 className='section-header'>Our Programs</h1>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-4 w-full'>
            <div className='relative programs flex justify-center items-center w-full '>
                <img src={Img1} alt="" className='h-[300px] w-full object-cover rounded-sm'/>
                <h2 className='absolute text-[56px] font-bold text-white z-2'>Nursery</h2>
            </div>
            <div className='relative programs flex justify-center items-center w-full'> 
                <img src={Img2} alt="" className='h-[300px] w-full object-cover rounded-sm'/>
                <h2 className='absolute text-[56px] font-bold text-white z-2'>Primary</h2>
            </div>
        </div>
        <div>
            <div className='relative programs flex justify-center items-center'>
                <img src={Img3} alt="" className='h-[300px] w-full object-cover rounded-sm'/>
                <h2 className='absolute text-[56px] font-bold text-white z-2'>Secondary</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Programs

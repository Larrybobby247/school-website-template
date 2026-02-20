import React from 'react'
import { Testimonies } from './TestimonialLists'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Testimonials = () => {
  return (
    <div>
      <h1 className='section-header'>What Parents Say</h1>
      <div className=' carousel'>
        <div className='flex gap-8 group-carousel'>
        {Testimonies.map(testimony => {
            return(
                <div className='bg-navy p-4 w-[300px] flex-shrink-0 rounded-sm shadow-md text-white'>
                    <div className='mb-4'>
                        <h3 className='text-xl font-medium'>{testimony.name}</h3>
                    </div>
                    <p className='text-light'>
                        <span><FontAwesomeIcon icon={faQuoteLeft} className='text-white'/></span>
                        {testimony.message}
                        <span><FontAwesomeIcon icon={faQuoteRight} className='text-white'/></span>
                    </p>
                </div>
                
                
            )
        })}
        </div>
        
      </div>
    </div>
  )
}

export default Testimonials

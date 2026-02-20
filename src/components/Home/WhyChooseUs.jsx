import { faBuildingColumns, faChalkboardUser, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div>
      <h1 className='section-header'>Why Choose Us</h1>
      <div className='flex flex-col md:flex-row gap-4'>
            <div className='services'>
                <FontAwesomeIcon icon={faChalkboardUser} className='text-4xl'/>
                <h3 className='text-2xl font-bold'>Experienced Tutors</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='services'>
                <FontAwesomeIcon icon={faBuildingColumns} className='text-4xl'/>
                <h3 className='text-2xl font-bold'>Modern Facilities</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div >
            <div className='services'>
                <FontAwesomeIcon icon={faTrophy} className='text-4xl'/>
                <h3 className='text-2xl font-bold'>Guaranteed Success</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs

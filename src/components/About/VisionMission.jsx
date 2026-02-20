import { faBookBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const VisionMission = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='flex flex-col gap-4 shadow-md px-4 py-8 rounded-sm'>
        <FontAwesomeIcon icon={faBookOpen} className='text-4xl text-navy'/>
        <h2 className='text-3xl font-bold '>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum id quas delectus unde voluptatibus, consequatur rerum? Aperiam, illum quisquam?</p>
      </div>
      <div className='flex flex-col gap-4 shadow-md px-4 py-8 rounded-sm'>
        <FontAwesomeIcon icon={faBookBookmark} className='text-4xl text-navy'/>
        <h2 className='text-3xl font-bold '>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum id quas delectus unde voluptatibus, consequatur rerum? Aperiam, illum quisquam?</p>
      </div>
    </div>
  )
}

export default VisionMission

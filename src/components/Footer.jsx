import { faEnvelope, faLocationArrow, faLocationDot, faPhone, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-navy w-full text-white px-6 py-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
      <div className='flex flex-col gap-4'>
        <Link to= '/' className='flex items-center gap-2 text-white'>
          <FontAwesomeIcon icon={faSchool} className='text-4xl'/>
          <span className='text-2xl font-medium'>Methodist School</span>
        </Link>

        <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem accusamus obcaecati inventore velit officiis perspiciatis sit dolor, aperiam beatae ea.</p>
      </div>
      <div>
        <h2 className='text-xl font-medium mb-4'>Get In Touch</h2>
        <div className='flex flex-col gap-4 '>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faLocationDot} className='text-xl'/>
            <span>12 Morewa Estate, <br />Ibadan, Oyo state Nigeria</span>
          </div>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-xl'/>
            <span>methodistschool001@gmail.com</span>
          </div>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faPhone} className='text-xl'/>
            <span>+234 9025504256</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-medium mb-4'>Quick Links</h2>
        <ul className='flex flex-col gap-4 font-medium'>
          <li className="nav-link-md"><Link to="/" className='lii'>Home</Link></li>
          <li className="nav-link-md"><Link to="/about" className='lii'>About Us</Link></li>
          <li className="nav-link-md"><Link to="/admission">Admission</Link></li>
          <li className="nav-link-md"><Link to="/blogs">Blogs</Link></li>
          <li className="nav-link-md"><Link to="/gallary">Gallary</Link></li>
          <li className="nav-link-md"><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h2 className='text-xl font-medium mb-2'>Newletter </h2>
        <p>Subscribe to our newsletter to get latest updates.</p>
        <div className='mt-4 bg-white w-fit p-2 rounded-sm flex gap-4 items-center'>
          <input type="text" placeholder='Enter your email...' className='outline-none placeholder:text-grey text-black text-lg'/>
          <FontAwesomeIcon icon={faLocationArrow} className='text-lg bg-navy rounded-full p-2 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer

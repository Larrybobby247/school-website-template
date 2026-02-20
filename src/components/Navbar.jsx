import { faBars, faClose, faSchool } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const[nav, setNav] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between w-full items-center px-4 py-6 md:px-8 sticky top-0 left-0 z-5 bg-white shadow-sm relative'>
      {/* Logo */}
      <Link to= '/' className='flex items-center gap-2 text-navy'>
        <FontAwesomeIcon icon={faSchool} className='text-4xl'/>
        <span className='text-2xl font-medium'>Methodist School</span>
      </Link>

      <ul className=" hidden lg:flex gap-6 text-lg ">
        <li className="nav-link-lg"><Link to="/">Home</Link></li>
        <li className="nav-link-lg"><Link to="/about">About Us</Link></li>
        <li className="nav-link-lg"><Link to="/admission">Admission</Link></li>
        <li className="nav-link-lg"><Link to="/blogs">Blogs</Link></li>
        <li className="nav-link-lg"><Link to="/gallary">Gallary</Link></li>
        <li className="nav-link-lg"><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="lg:hidden">
        <FontAwesomeIcon icon={faBars} className='text-xl cursor-pointer' onClick={showNav}/>
      </div>

      {/* Mobile nav links */}
      <div className={`bg-faint absolute right-[-100%] top-0 w-full h-[100dvh] transition-translate duration-500 ${nav ? 'right-[0]' : 'right-[-100%] opacity-[.3]'}`}>
      <div className={`w-[70%] float-right bg-navy text-white transition-translate duration-500 h-[100dvh] p-6`}>
        <FontAwesomeIcon icon={faClose} onClick={showNav} className='text-xl cursor-pointer float-right'/>
        <ul className="flex flex-col gap-6 mt-10 text-xl">
          <li className="nav-link-md"><Link to="/" className='lii'>Home</Link></li>
          <li className="nav-link-md"><Link to="/about" className='lii'>About Us</Link></li>
          <li className="nav-link-md"><Link to="/admission">Admission</Link></li>
          <li className="nav-link-md"><Link to="/blogs">Blogs</Link></li>
          <li className="nav-link-md"><Link to="/gallary">Gallary</Link></li>
          <li className="nav-link-md"><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar

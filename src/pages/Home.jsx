import React from 'react'
import Hero from '../components/Home/Hero'
import AboutHome from '../components/Home/AboutHome'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Programs from '../components/Home/Programs'
import HomeBlogs from '../components/Home/HomeBlogs'
import HomeGallary from '../components/Home/HomeGallary'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <Hero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        <AboutHome/>
        <WhyChooseUs/>
        <HomeBlogs/>
        <Programs/>
        <HomeGallary/>
        <Testimonials/>
      </div>
      <CallToAction/>
    </div>
  )
}

export default Home

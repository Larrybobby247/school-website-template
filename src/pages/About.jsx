import React from 'react'
import AboutHome from '../components/Home/AboutHome'
import AboutHero from '../components/About/AboutHero'
import VisionMission from '../components/About/VisionMission'
import History from '../components/About/History'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import CallToAction from '../components/Home/CallToAction'

const About = () => {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <AboutHero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        <AboutHome/>
        <VisionMission/>
        <History/>
        <WhyChooseUs/>
        <CallToAction/>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import ContactHero from '../components/Contact/ContactHero'
import ContactDetails from '../components/Contact/contactDetails'

const Contact = () => {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <ContactHero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        
        <div className='flex flex-col lg:flex-row gap-16'>
          <ContactForm/>
          <ContactDetails/>
        </div>
      </div>
    </div>
  )
}

export default Contact

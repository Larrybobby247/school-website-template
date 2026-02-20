import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col gap-8 bg-navy p-8 text-white rounded-sm shadow-md lg:w-[60%]'>
      <h2 className='text-3xl font-bold '>Send us a Message</h2>
      <form className="flex flex-col gap-4">
        <div className='flex flex-col lg:flex-row gap-4 '>
            <label className='text-lg w-[20%]'>Full Name</label>
            <input type="text" placeholder='eg. John Lock' className='w-full bg-white outline-none text-black rounded-sm h-fit px-2 py-4'/>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 '>
        <label className='text-lg lg:w-[20%]'>Phone Number</label>
        <input type="text" placeholder='eg. +2349020003596' className='w-full bg-white outline-none text-black rounded-sm h-fit px-2 py-4'/>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 '>
        <label className='text-lg lg:w-[20%]'>Email Address</label>
        <input type="email" placeholder='eg. abc@gmail.com' className='w-full bg-white outline-none text-black rounded-sm h-fit px-2 py-4'/>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
            <label className='text-lg lg:w-[20%]'>Reason for Reaching out</label>
            <input type="text" placeholder='eg. Payment of School Fees' className='w-full bg-white outline-none text-black rounded-sm h-fit px-2 py-4'/>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 '>
            <label className='text-lg lg:w-[20%] '>Message</label>
            <textarea rows="4" className='w-full bg-white outline-none rounded-sm'/>
        </div>

        <button type="submit" className="btn-secondary">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm

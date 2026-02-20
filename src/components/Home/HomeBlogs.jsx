import React from 'react'
import {Blogs} from './Blogs'
import { Link } from 'react-router-dom'

const HomeBlogs = () => {

  return (
    <div>
      <h1 className='section-header'>Latest Updates</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {Blogs.map(blog => {
            return(
                <Link to='/' key={blog.id} className='flex flex-col gap-3 p-4 bg-white transition duration-300 shadow-md hover:shadow-xl hover:translate-y-[-4px] rounded-sm'>
                    <img src={blog.image} alt="" className='rounded-sm h-[280px] object-cover '/>
                    <h3 className='text-2xl font-medium'>{blog.name}</h3>
                    <p className='text-grey'>{blog.description}</p>
                    
                    <button className='btn-primary text-navy hover:text-white'>Read More</button>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default HomeBlogs

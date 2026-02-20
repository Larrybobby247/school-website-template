import React from 'react'
import BlogHero from '../components/Blog/BlogHero'
import HomeBlogs from '../components/Home/HomeBlogs'

const Blog = () => {
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <BlogHero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        <HomeBlogs/>
      </div>
    </div>
  )
}

export default Blog

import React from 'react'
import { useParams } from 'react-router-dom'
import {Blogs} from './components/Home/Blogs'
import BlogContentHero from './components/Blog/BlogContentHero'
import HomeBlogs from './components/Home/HomeBlogs'

const BlogContent = () => {
    const{name} = useParams();
    const blog = Blogs.find(blg => blg.name === name);
    
    if(!blog){
        return <h3 className='text-3xl text-grey font-bold text-center my-24'>Invalid URL</h3>
    }
    
  return (
    <div className='flex flex-col gap-16 mb-16'>
      <BlogContentHero/>
      <div className='mx-4 md:mx-6 lg:mx-10 flex flex-col gap-16'>
        <img src={blog.image} alt="" className='w-full h-[400px] object-cover rounded-sm'/>
        <h1 className='text-3xl font-bold '>{name}</h1>
        <div className='flex flex-col gap-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio excepturi placeat deserunt officiis culpa doloremque iste sit illo enim aspernatur! Molestiae dignissimos ipsa magni corporis sed eius harum dicta maiores porro recusandae fugiat, pariatur voluptatum veritatis autem quia delectus. Laborum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsa ut maiores aut omnis amet praesentium non consectetur, eveniet repudiandae est impedit sit sapiente quos numquam dignissimos quas voluptas temporibus eius iste rem aperiam? Quos dolor sint amet quam deleniti omnis voluptatibus aperiam, vitae, nesciunt odit animi eum tenetur laboriosam aliquid vel obcaecati placeat totam repellendus dolore exercitationem ipsam enim?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium mollitia ipsam harum odit voluptas qui eius magni, facere reprehenderit architecto aut eaque illum alias hic recusandae cumque iusto cum vero?</p>
        </div>
        <div>
          <HomeBlogs/>
        </div>
      </div>
    </div>
  )
}

export default BlogContent

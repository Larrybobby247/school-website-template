import React from "react";
import Img1 from '../../assets/school-building.jpg'

const BlogHero = () => {
  return (
    <div className="h-[50vh] relative flex items-center hero">
      <img src={Img1} alt="" className="h-full w-full object-cover" />
      <div className="absolute mx-8 md:mx-16 lg:mx-20 flex flex-col gap-4 text-white z-2 md:w-[50%]">
        <h1 className="text-[40px] font-bold">Blog</h1>
        <p className="text-lg ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates,
          dolores?
        </p>
      </div>
    </div>
  );
};

export default BlogHero;

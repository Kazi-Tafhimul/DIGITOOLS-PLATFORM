import React from 'react';
import { IoPlayOutline } from "react-icons/io5";
import bannerImage from "../assets/products/banner.png"

const Banner = () => {
    return (
        <div>
            <section className='bg-white px-6 py-20 md:px-12 md:py-24'>
                <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
                    <div className='w-full md:w-1/2 space-y-6 text-left'>
                      <div className='inline-flex items-center gap-2 bg-[#F3F0FF] text-[#813CDE] px-3 py-1.5 rounded-full text-xs font-semibold'>
                        <span className="h-2 w-2 rounded-full bg-[#813CDE]"></span>
                        New: AI-Powered Tools Available
                      </div>
                      <h1 className='text-5xl font-bold leading-tight '>
                        Supercharge Your <br /> Digital Workflow
                      </h1>
                      <p className='text-[#627382]'>
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today.
                        
                      </p>
                      <div className='flex flex-wrap items-center gap-4 pt-4'>
                        <button className='btn rounded-full  bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
                            Explore Products
                        </button>
                        <button className='border border-2 border-purple-500 rounded-full p-1.5 hover:bg-purple-500 hover:text-white cursor-pointer'>
                            <div className='flex justify-center items-center gap-2'>

                            <IoPlayOutline />
                            Watch demo
                            </div>
                        </button>


                      </div>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center'>
                      <img src={bannerImage} alt="" />

                    </div>

                </div>

            </section>
            
        </div>
    );
};

export default Banner;
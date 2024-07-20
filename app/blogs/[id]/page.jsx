"use client"
import { blog_data } from '@/Assets/assets'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Footer from '@/Components/footer'
import Link from 'next/link'
import axios from 'axios'
function Page ({params}) {


  const [data,setData] = useState(null);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`/api/blog/${params.id}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchBlogData();
  }, [params.id]);


  return (
    data ?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">

      <Link href='/'>
        <Image src={assets.logo} width={180} alt='logo here' className='w-[130px] sm:w-auto'/>
      
      </Link>
        
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get started<Image src={assets.arrow} alt='arrow-logo'/></button>
      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
          {data.title}         
        </h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='author=pi-here'  />

        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>


      </div>
        
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='blog-cover-image' />
      

     <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
       
      <div className="my-24">
        <p className="text-black font-semibold">Share this Article to Social media</p>
        <div className="flex gap-2">
          <Image src={assets.facebook_icon} alt='icon' width={30} height={30} className='' />
          <Image src={assets.twitter_icon} alt='icon' width={30} height={30} className='' />
          <Image src={assets.googleplus_icon} alt='icon' width={30} height={30} className='' />
        </div>
      </div>

    </div>
    <Footer/>
    </>:<></>
    
  )
}

export default Page

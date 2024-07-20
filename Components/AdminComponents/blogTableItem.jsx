import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='item-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon} />
            <p>{author?author:'Anonymous'}</p>
        </th>

        <td className="px-6 py-4">
            {title?title:"No Title Available"}
        </td>

        <td className="px-6 py-4">
            {BlogDate.toDateString()}
        </td>

        <td onClick={()=>deleteBlog(mongoId)}className="px-6 py-4 cursor-pointer">
        
        <button class="bg-black text-red-500 font-bold py-2.5 px-6 rounded-lg shadow-sm transition duration-300 ease-in-out hover:bg-white border border-black">Delete</button>
        </td>
    </tr>
  )
}

export default BlogTableItem
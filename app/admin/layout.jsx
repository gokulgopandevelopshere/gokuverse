import { assets } from '@/Assets/assets'
import Image  from 'next/image'
import Sidebar from '../../Components/AdminComponents/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';

export default function Layout({children}){
    return(
        <>
        <div className='flex'>
            <ToastContainer theme='dark'/>
            <Sidebar/>
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
               <h3 className='font-medium'>Admin Panel</h3>
               <Link href="/">
               <button className='mt-1 w-40 h-10 border bg-black text-blue-400 border-black rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-green-500 '>Home</button>
               </Link>
                <Image src={assets.profile_icon} width={40} alt=''/>
            </div>
            {children}
        </div>
        </div>
       
        </>
    )

}
import Header from "@/Components/Header";
import BlogList from '@/Components/BlogList'
import Footer from "@/Components/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
   <>
   <ToastContainer theme="dark"/>
   <Header/>
    <BlogList/>
    <Footer/>


    
    
    </>
  );
}

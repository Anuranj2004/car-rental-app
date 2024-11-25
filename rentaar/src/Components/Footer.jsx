import React from 'react'
import { BsChevronDoubleRight, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className='bg-zinc-900 text-white px-5 py-9 flex flex-col items-center '>
      <img src={Logo} alt="logo" className='logo w-32 mb-8'/>
      <div className='flex flex-wrap items-center justify-center w-full  gap-16 '>
        <div className='flex-1 flex flex-col min-w-52 gap-3'>
          <h1 className='text-lg font-semibold text-red-500'>Rentaar</h1>
          <hr />
          <p className='text-justify text-sm'>Rentaar is your go-to platform for hassle-free car rentals. Browse a diverse fleet of vehicles,
            from economy to luxury, with transparent pricing and real-time availability. Book in minutes, enjoy
            24/7 customer support, and hit the road with confidence. Flexible pickup locations and comprehensive
            insurance options available nationwide.</p>
        </div>
        <div className='flex-1 flex flex-col min-w-52 gap-3 pl-2'>
          <h1 className='font-semibold'>Quick Links</h1>
          <hr />
          <NavLink to='/'
            className={({ isActive }) => isActive ? "text-red-600" : "text-zinc-100"}>
            <p className='hover:text-zinc-400 text-sm flex items-center'><BsChevronDoubleRight/>Home</p>
          </NavLink>
          <NavLink to='/about'
            className={({ isActive }) => isActive ? "text-red-600" : "text-zinc-100"}>
            <p className='hover:text-zinc-400 text-sm flex items-center'><BsChevronDoubleRight/> About Us</p>
          </NavLink>
          <NavLink to='/services'
            className={({ isActive }) => isActive ? "text-red-600" : "text-zinc-100"}>
            <p className='hover:text-zinc-400 text-sm flex items-center'><BsChevronDoubleRight/> Our Services</p>
          </NavLink>
          <NavLink to='/contact'
            className={({ isActive }) => isActive ? "text-red-600" : "text-zinc-100"}>
            <p className='hover:text-zinc-400 text-sm flex items-center'><BsChevronDoubleRight/> Contact Us</p>
          </NavLink>
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='font-semibold'>Social Links</h1>
          <div className='flex gap-4 pl-5'>
            <BsInstagram className=' hover:text-red-600'/>
            <BsYoutube className=' hover:text-red-600'/>
            <BsTwitterX  className=' hover:text-red-600'/>
            <BsLinkedin className=' hover:text-red-600'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
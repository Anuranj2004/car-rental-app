import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { FiMenu } from "react-icons/fi";

const Header = () => {

    const [user, setUser] = useState({})
    const [open, setOpen] = useState(false)

    const handleLogout = async () => {
        const res = await axios.post('http://localhost:3000/auth/logout')
        setUser()
        localStorage.removeItem("user");
    }

    useEffect(() => {
        const response = JSON.parse(localStorage.getItem('user'));
        setUser(response)
    }, [])
    return (
        <div>
            <div className='fixed w-full header flex justify-between p-6 bg-black z-20'>
                <FiMenu
                onClick={()=>setOpen(!open)} 
                className=' text-zinc-50 text-xl 800px:hidden' />
                <div className='nav-logo flex items-center'>
                    <NavLink to='/'>
                        <img src={Logo} alt="logo" className='logo w-20' />
                    </NavLink>
                </div>
                <div className='nav-list flex gap-8 text-zinc-100 font-extralight items-center max-800px:hidden'>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>Home</p>
                    </NavLink>
                    <NavLink to='/about'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>About Us</p>
                    </NavLink>
                    <NavLink to='/services'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>Our Services</p>
                    </NavLink>
                    <NavLink to='/contact'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>Contact Us</p>
                    </NavLink>
                    <NavLink to='/cars'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>Cars</p>
                    </NavLink>
                    {user && <NavLink to='/booked-cars'
                        className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                        <p className='hover:text-zinc-400'>Booked Cars</p>
                    </NavLink>}

                </div>
                {user ? 
                <div className='flex gap-6'>
                    <h1 className='text-zinc-300 font-light text-md border px-4 py-1 rounded border-zinc-600'>{user.name}</h1>
                    <button
                    onClick={handleLogout}
                    className='bg-slate-300 text-slate-950 font-light rounded-lg px-4 py-1 border hover:bg-zinc-200  hover:text-zinc-900'>
                    Logout
                </button>
                </div> :
                    <NavLink to='/login'>
                        <button
                            className='bg-slate-300 text-slate-950 font-light rounded-lg px-4 py-1 border hover:bg-zinc-200  hover:text-zinc-900'>
                            Login
                        </button>
                    </NavLink>}
            </div>

            {open&&<div className='nav-list flex flex-col fixed w-full py-10 z-30 top-20 gap-8 text-zinc-100 font-extralight items-center bg-black 800px:hidden'>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>Home</p>
                </NavLink>
                <NavLink to='/about'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>About Us</p>
                </NavLink>
                <NavLink to='/services'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>Our Services</p>
                </NavLink>
                <NavLink to='/contact'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>Contact Us</p>
                </NavLink>
                <NavLink to='/cars'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>Cars</p>
                </NavLink>
                {user && <NavLink to='/booked-cars'
                    className={({ isActive }) => isActive ? "text-zinc-400" : "text-zinc-100"}>
                    <p className='hover:text-zinc-400'>Booked Cars</p>
                </NavLink>}

            </div>}

        </div>
    )
}

export default Header
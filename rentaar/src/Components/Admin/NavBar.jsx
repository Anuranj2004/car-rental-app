import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='w-72 min-h-screen bg-slate-100 pl-2 py-3'>
            <h1 className=' text-lg font-bold mb-8 text-center'>Admin</h1>
            <div className='flex flex-col gap-5'>

                <NavLink to='/admin/dashboard'>
                    <h1 className='font-light'>DashBoard</h1>
                </NavLink>
                <hr className=' bg-black '/>
                <NavLink to='/admin/user'>
                    <h1 className='font-light'>Users</h1>
                </NavLink>
                <hr className=' bg-black '/>
                <NavLink to='/admin/add-car'>
                    <h1 className='font-light'>Add Car</h1>
                </NavLink>
                <hr className=' bg-black '/>
                <NavLink to='/admin/bookings'>
                    <h1 className='font-light'>Bookings</h1>
                </NavLink>
                <hr className=' bg-black '/>
                <NavLink to='/admin/messages'>
                    <h1 className='font-light'>Messages</h1>
                </NavLink>
                <hr className=' bg-black '/>
            </div>

        </div>
    )
}

export default NavBar
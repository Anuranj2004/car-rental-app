import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../../Components/Admin/NavBar'
axios.defaults.withCredentials = true


const User = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.post('http://localhost:3000/admin/userdetail')
            setUsers(response.data.users)
            //console.log(response)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='flex'>
            <NavBar />
            <div className=' flex gap-5 flex-col items-center w-full px-10'>
                <h1 className='mt-10 font-bold text-xl'>Registered Users</h1>
                <div className='m-5 shadow-lg shadow-zinc-400 w-full items-center'>
                    <table className='w-full border border-zinc-950'>
                        <tr className='text-center border border-zinc-950'>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Email</th>
                            <th className='p-2'>Phone</th>
                            <th className='p-2'>Date</th>
                        </tr>
                    {
                        users.map(user=>(
                            <tr className=' text-center border border-zinc-950'>
                                <td className='p-5 '>{user.name}</td>
                                <td className='p-5'>{user.email}</td>
                                <td className='p-5'>{user.phone}</td>
                                <td className='p-5'>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                    </table>
                </div>

            </div>

        </div>
    )
}

export default User
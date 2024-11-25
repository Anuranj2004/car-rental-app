import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState()
    const [password, setPassword] = useState('')
    const [passwordDisplay , setPasswordDisplay] = useState(false)
    const navigate = useNavigate()

    const handleOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/otp-reset', {
                email
            });
            setPasswordDisplay(true)
            console.log(response.data.message)
            alert(response.data.message)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/reset-passoword', {
                email,
                otp,
                password
            })
            alert(response.data.message)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div><Layout>
            <div className='flex w-full  min-h-screen justify-center items-center text-zinc-100 gap-10 bg-gradient-to-tr from-zinc-800 to-black'>
                <div className='md:w-[50%] w-full m-10 p-10 shadow-lg shadow-zinc-800 flex flex-col gap-10 items-center bg-zinc-950 rounded-lg hover:bg-gradient-to-tr '>
                    <h1 className='text-lg font-light'>Register</h1>
                    <div className='flex flex-col gap-2 items-center'>
                        <form action="" onSubmit={handleSubmit}
                            className='flex flex-col gap-6 items-center'>
                            <input type="text" placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='text-zinc-500 placeholder:text-zinc-500 placeholder:text-sm border bg-transparent border-zinc-500 px-5 py-1 rounded outline-none' />
                            <button className='text-zinc-100 text-sm font-light bg-zinc-500 px-5 py-2 rounded-lg hover:bg-zinc-300 hover:text-zinc-700 cursor-pointer'
                                onClick={handleOtp}
                            >Send Otp</button>
                                {passwordDisplay&&<input type="text" placeholder='Enter Otp'
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className='text-zinc-500 placeholder:text-zinc-500 placeholder:text-sm border bg-transparent border-zinc-500 px-5 py-1 rounded outline-none' />}
                                {passwordDisplay&&<input type="text" placeholder='Enter Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='text-zinc-500 placeholder:text-zinc-500 placeholder:text-sm border bg-transparent border-zinc-500 px-5 py-1 rounded outline-none' />}
                                {passwordDisplay&&<input type="submit" value="Submit"
                                    className='text-zinc-100 text-sm font-light bg-zinc-500 px-5 py-2 rounded-lg hover:bg-zinc-300 hover:text-zinc-700 cursor-pointer ' />}
                        </form>
                    </div>
                </div>
            </div>
        </Layout></div>
    )
}

export default ResetPassword
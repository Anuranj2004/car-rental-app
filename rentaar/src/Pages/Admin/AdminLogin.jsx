import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/admin/admin-login',{
        email,
        password
      })
      if(response.data.verify){
        alert(response.data.message)
        navigate("/admin/dashboard")
      }
      
    }catch(err){
      alert(err.response.data.message)
    }
  }
  return (
    <div className=' max-h-screen min-h-screen flex flex-col gap-5 w-full items-center justify-center '>
      <h1 className='text-lg font-semibold'>Admin Login</h1>
      <div>
        <form action=""
          onSubmit={handleSubmit}
          className='flex flex-col gap-7'>
          <input type="email" 
          placeholder='Enter Email..'
          value={email}
          onChange={(e)=>setEmail(e.target.value)} 
          className='border-2 px-3 py-1 ' />
          <input type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Enter  Password..' 
          className='border-2 px-3 py-1 ' />
          <input type="submit" value="Submit" className='px-4 py-2 bg-black text-zinc-100 rounded-md' />
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
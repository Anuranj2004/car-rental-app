import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3000/auth/login',{
      email,
      password
    })
    const userDetails = {
      name: response.data.name,
      email:response.data.email,
      phone:response.data.phone
    }
    localStorage.setItem('user' , JSON.stringify(userDetails))
    alert(`${response.data.message}..., Hi ${response.data.name}..`)
    
    navigate('/')

  }catch(err){
    console.log(err)
    alert(err.response.data.message)
  } 
  }

  return (
    <div>
      <Layout>
        <div className='flex w-full max-h-screen min-h-screen justify-center items-center text-zinc-100 gap-10 bg-gradient-to-tr from-zinc-800 to-black'>
          <div className='md:w-[50%] w-full m-10 p-10 shadow-lg shadow-zinc-800 flex flex-col gap-10 items-center bg-zinc-950 rounded-lg hover:bg-gradient-to-tr '>
            <h1 className='text-lg font-light'>Login</h1>
            <div className='flex flex-col gap-2 items-center'>
              <form action="" onSubmit={handleSubmit}
                className='flex flex-col gap-6 items-center'>
                <input type="text" placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  className='text-zinc-500 placeholder:text-zinc-500 placeholder:text-sm border bg-transparent border-zinc-500 px-5 py-1 rounded outline-none' />
                <input type="text" placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                  className='text-zinc-500 placeholder:text-zinc-500 placeholder:text-sm border bg-transparent border-zinc-500 px-5 py-1 rounded outline-none' />
                <input type="submit" value="Submit"
                  className='text-zinc-100 text-sm font-light bg-zinc-500 px-5 py-2 rounded-lg hover:bg-zinc-300 hover:text-zinc-700 cursor-pointer' />
              </form>
              <div className='flex flex-col items-center gap-1'>
                <p className='text-xs font-light'>Forgot your Password? <span className=' hover:text-red-400 cursor-pointer' onClick={()=>navigate('/reset-password')}><u>Click Here</u></span></p>
                <p className='text-xs font-light'>Don't Have an Account? <span className='hover:text-red-400 cursor-pointer' onClick={()=>navigate('/register')}><u>Create Account</u></span></p>

              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Login
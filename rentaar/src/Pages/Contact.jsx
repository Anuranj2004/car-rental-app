import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Banner'
import contactBanner from '../assets/contact.webp'
import axios from 'axios'

const Contact = () => {

  const[name ,setName] = useState('')
  const[email ,setEmail] = useState('')
  const[phone ,setPhone] = useState()
  const[message ,setMessage] = useState('')

  const handleMessage = async ()=>{
    try{
      const response = await axios.post('http://localhost:3000/auth/user-message',{
        name,
        email,
        phone,
        message
      })
      alert(response.data.message)
      // setName('')
      // setPhone(null)
      // setEmail('')
      // setMessage('')

    }catch(err){
      alert(err.response.data.message)
    }
  }

  return (
    <div>
      <Layout>
        <div>
          <Banner img={contactBanner} />
          <div className='pt-20 pb-20 px-14 w-full flex gap-10 flex-wrap opacity-80'>
            <div className='address px-3 py-7 shadow-lg font-light items-center shadow-zinc-900 text-zinc-100 min-w-72 flex-1 flex flex-col gap-5'>
              <h1 className='text-lg font-semibold text-red-300'>Address</h1>
              <hr />
              <p className='text-justify px-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley</p>
            </div>
            <div className="contact_details flex-1 flex flex-col min-w-72 font-light items-center gap-5 px-3 py-7 shadow-lg shadow-zinc-900 text-zinc-100">
              <h1 className='text-lg font-semibold text-red-300'>Contact</h1>
              <hr />
              <p>+91 9988776655</p>
              <p>+91 9988776655</p>
              <hr />
              <p>info@rentaar.com </p>
              <p>rentaarrental@gmail.com</p>
            </div>
          </div>
          <div className='pt-10 pb-12 md:px-32 px-5 flex flex-col gap-16 items-center w-full'>
            <h1 className='text-zinc-200 text-2xl font-light'>Anything To Say...</h1>
            <div className='grid xs:grid-cols-2 w-full gap-x-5 gap-y-3'>

              <input type="text"
                placeholder='Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                className='px-3 py-2 w-full bg-transparent border border-zinc-200 rounded-lg text-zinc-200' />

              <input type="email"
                placeholder='Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                className='px-3 py-2 w-full bg-transparent border border-zinc-200 rounded-lg text-zinc-200' />

              <input type="number"
                placeholder='Phone Number'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className='px-3 py-2 w-full bg-transparent border border-zinc-200 rounded-lg text-zinc-200 h-12' />

              <textarea
                name="message" id=""
                placeholder='Message'
                value={message}
                required
                onChange={(e)=>setMessage(e.target.value)}
                className='px-3 py-2 w-full bg-transparent border border-zinc-200 rounded-lg text-zinc-200 h-24'></textarea>

            </div>
            <button 
            onClick={handleMessage}
            className='bg-red-400 text-zinc-100 px-8 py-2'>Send</button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Banner'
import HomeBanner from '../assets/homeBanner.webp'
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Layout>
        <div className='pb-20'>
          <Banner img={HomeBanner} tag='"Drive Your Dreams, Rent with Ease"' />
          <h1 className='text-zinc-300 text-center mt-10 text-3xl font-semibold'>Our Services</h1>
          <div className="services flex flex-wrap justify-center gap-10 w-full py-20 md:px-20 px-10">
            <div className='flex-1 items-center flex flex-col gap-20 py-16 px-5 min-w-40  text-zinc-50 bg-zinc-950 rounded-lg shadow-xl shadow-zinc-900 hover:scale-105 duration-300'>
              <div className='p-2 m-auto rounded-full bg-red-300 text-zinc-950'><Fa1 className='text-3xl' /></div>
              <p className='text-lg font-semibold'>Flexible Vehicle Rental Options</p>
            </div>
            <div className='flex-1 flex flex-col items-center gap-20 py-16 px-5 min-w-40 text-zinc-50 bg-zinc-950 rounded-lg shadow-xl shadow-zinc-900 hover:scale-105 duration-300'>
              <div className='p-2 m-auto rounded-full bg-red-300 text-zinc-950'><Fa2 className='text-3xl' /></div>
              <p className='text-lg font-semibold'>Specialized Vehicle Services</p>
            </div>
            <div className='flex-1 flex flex-col items-center gap-20 py-16 px-5 min-w-40 text-zinc-50 bg-zinc-950 rounded-lg shadow-xl shadow-zinc-900 hover:scale-105 duration-300'>
              <div className='p-2 m-auto rounded-full bg-red-300 text-zinc-950'><Fa3 className='text-3xl' /></div>
              <p className='text-lg font-semibold'>Convenience Services</p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-8 w-[90%] mx-auto px-10 py-5 bg-yellow-900 bg-opacity-30 rounded-xl shadow-xl shadow-zinc-950 '>
            <h1 className='text-zinc-400 text-3xl font-semibold'>About Us</h1>
            <hr className='w-[50%] font-light'/>
            <p className='text-lg text-zinc-400 font-light'>At RentAar, we're redefining car rental with technology that puts you in control.
              From eco-friendly to luxury vehicles, our carefully maintained fleet meets every need.
              Enjoy transparent pricing, contactless pickup, and 24/7 support through our user-friendly web platform.
              Your journey begins with Rentaar where exceptional service meets modern convenience.</p>
            <button className='bg-black px-5 py-2 text-blue-300 rounded-lg' onClick={()=>navigate('/about')} >More About Us..</button>
          </div>
          <div className='flex flex-col items-center gap-14 my-20 w-[90%] m-auto'>
            <h1 className='text-zinc-50 font-light text-2xl'>Rental <span className='text-red-700 font-bold'>Process</span></h1>
            
            <div className='flex flex-wrap gap-20  w-full'>
            <div className='flex-1 flex flex-col min-w-52 gap-10 text-zinc-50 px-5 py-10 rounded-md shadow-lg shadow-zinc-900'>
              <h5 className='text-xl'>1. Choose A Car</h5>
              <p className='font-extralight'>View our range of cars, find your perfect car for the coming days.</p>
            </div>
            <div className='flex-1 flex flex-col min-w-52 gap-10 text-zinc-50 px-5 py-10 rounded-md shadow-lg shadow-zinc-900'>
              <h1 className='text-xl'>2. Make Payment</h1>
              <p className='font-extralight'>Our advisor team is ready to help you with the booking process or any questions.</p>
            </div>
            <div className='flex-1 flex flex-col min-w-52 gap-10 text-zinc-50 px-5 py-10 rounded-md shadow-lg shadow-zinc-900'>
              <h1 className='text-xl'>3. Enjoy Drive</h1>
              <p className='font-extralight'>Receive the key and enjoy your car. We treat all our cars with respect.</p>
            </div>
            </div>
          </div>

        </div>
      </Layout>
    </div>
  )
}

export default Home
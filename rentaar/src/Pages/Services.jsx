import React from 'react'
import Layout from '../Layout/Layout'
import servicesBanner from '../assets/services.webp'
const Services = () => {
  return (
    <div>
      <Layout>
        <div className='pt-40 pb-28 flex flex-col gap-20'>
          <div className='banner w-full h-60 flex'>
            <h1 className=' absolute mt-36 left-5 text-zinc-300 text-5xl font-bold'>Our Services</h1>
            <img src={servicesBanner} alt="aboutBanner" className='w-full h-full opacity-30 shadow-lg shadow-zinc-800' />
          </div>
          <div className='md:px-16 px-5 py-14 bg-zinc-900 opacity-70 mx-10 rounded-lg flex flex-col gap-10 md:text-lg font-light text-zinc-100 text-justify'>
            <div className='flex flex-col gap-5'>
              <h1 className='md:text-2xl text-xl font-normal text-red-300'>Flexible Vehicle Rental Options</h1>
              <hr />
              <p>RentAAR offers unprecedented flexibility to match your unique travel needs. Choose from hourly, daily, weekly,
                and monthly rental packages with zero commitment. Our seamless booking platform allows instant modifications,
                cancellations, and extensions. Select from 50+ vehicle categories including economy, luxury, electric, and specialty
                vehicles. Enjoy one-way rentals across multiple locations, airport pickups, and home delivery services. Our dynamic
                pricing adapts to your requirements, offering competitive rates and last-minute deals. With no long-term contracts and
                transparent pricing, you can rent a vehicle that perfectly fits your lifestyle, budget, and destination - anytime, anywhere.</p>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='md:text-2xl text-xl font-normal text-red-300'>Convenience Services</h1>
              <hr />
              <p>We simplify your rental experience through comprehensive convenience services designed to save you time and reduce stress. 
                Enjoy doorstep vehicle delivery to your home, office, or hotel with our flexible drop-off and pickup options. Our airport 
                meet-and-greet service ensures a smooth transition from flight to driving. Need a last-minute vehicle? Our extended hours 
                and 24/7 support guarantee availability. We offer fuel service options, including prepaid tank refills and convenient refueling 
                stations. With contactless check-in, digital documentation, and instant support through our mobile app, RentAAR transforms car 
                rentals from a chore into a seamless, hassle-free experience.</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Services
import React from 'react'
import Layout from '../Layout/Layout'
import aboutBanner from '../assets/about.webp'

const About = () => {
  return (
    <div>
      <Layout>
        <div className='pt-40 pb-28 flex flex-col gap-20'>
          <div className='banner w-full h-60 flex'>
            <h1 className=' absolute mt-32 left-5 text-zinc-300 text-5xl font-bold'>About Rentaar</h1>
            <img src={aboutBanner} alt="aboutBanner" className='w-full h-full opacity-20 shadow-lg shadow-zinc-800' />
          </div>
          <div className='md:px-16 px-5 py-14 bg-zinc-900 opacity-70 mx-10 rounded-lg flex flex-col gap-5 md:text-lg font-light text-zinc-100 text-justify'>
            <p className=''>Rentaar is a pioneering car rental company that is revolutionizing the industry with our innovative
              digital platform and unwavering commitment to exceptional customer service. we set
              out to create a seamless, transparent, and enjoyable rental experience that empowers our customers
              to explore the world with confidence.</p>
            <h1 className='text-2xl font-normal text-red-300'>Our Mission and Values</h1>
            <hr />
            <p>At the heart of Rentaar is our mission to provide reliable, accessible, and modern car
              rental solutions that enable our customers to move freely. We believe that getting from Point
              A to Point B should be effortless, which is why we've built a service that puts your needs first.
              <br /><br />
              <u>Our core values guide every aspect of our business:</u><br /><br />
              <b>Innovation:</b> We constantly seek new ways to improve the rental experience through the latest technologies and industry best practices. Our digital-first approach allows us to streamline operations and deliver unparalleled convenience.
              <br /><b>Sustainability:</b> We're committed to reducing our environmental impact by offering a growing fleet of eco-friendly electric and hybrid vehicles. We also support sustainable business practices to minimize our carbon footprint.
              <br /><b>Accessibility:</b> We believe in making car rentals accessible to everyone, which is why we offer specialized services for diverse customer groups, including young drivers, seniors, and individuals with disabilities.
              <br /><b>Integrity:</b> Honesty, transparency, and trust are the foundations of our business. We always strive to do what's right for our customers, providing straightforward pricing and clear terms.</p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
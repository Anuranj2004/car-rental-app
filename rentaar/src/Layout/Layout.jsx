import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className='min-h-screen bg-black'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Cars from './Pages/Cars'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import ResetPassword from './Pages/Auth/resetPassword'
import AdminLogin from './Pages/Admin/AdminLogin'
import Dashboard from './Pages/Admin/Dashboard'
import User from './Pages/Admin/User'
import AddCar from './Pages/Admin/addCar'
import BookedCars from './Pages/RentalCarBooking/BookedCars'
import Bookings from './Pages/Admin/Bookings'
import AllMessages from './Pages/Admin/AllMessages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/booked-cars' element={<BookedCars/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='//admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/user' element={<User/>}/>
        <Route path='/admin/add-car' element={<AddCar/>}/>
        <Route path='/admin/bookings' element={<Bookings/>}/>
        <Route path='/admin/messages' element={<AllMessages/>}/>
      </Routes>
    </>
  )
}

export default App

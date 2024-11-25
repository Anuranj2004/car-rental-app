import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios'
import CarDetails from './carDetails'
import { useNavigate } from 'react-router-dom'
import BookingForm from './RentalCarBooking/BookingForm'

const Cars = () => {

  const [cars, setCars] = useState([])
  const [car, setCar] = useState([])
  const [openModel, setOpenModel] = useState(false)
  const navigate = useNavigate()
  const [openBookingForm, setOpenBookingForm] = useState(false)
  const [booking, setBooking] = useState([])

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/car-details')
      setCars(response.data.cars)

    } catch (err) {
      console.log(err)
    }
  }

  const carDetails = async (id) => {
    try {
      //console.log(id)
      const filteredCar = cars.filter(car => car._id === id)
      setCar(filteredCar[0])
      const response = await axios.get('http://localhost:3000/auth/car-details')
      setOpenModel(true)

    } catch (err) {
      alert(err.response.data.message)
      navigate('/login')
    }
  }

  const handleCarBook = async (id) => {
    try {
      const filteredCar = cars.filter(car => car._id === id)
      setBooking(filteredCar[0])
      const response = await axios.get('http://localhost:3000/auth/car-details')
      setOpenBookingForm(true)

    } catch (err) {
      alert(err.response.data.message)
      navigate('/login')

    }
  }



  const handleDetailsClose = () => setOpenModel(false)

  const handleBookingClose = ()=> setOpenBookingForm(false)

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <div>
      <Layout>
        <div className='w-full min-h-screen px-10 pt-36'>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-x-5 gap-y-5'>
            {cars.map((car) => (
              <div className='text-zinc-100 rounded-md flex flex-col gap-5 pb-10 shadow-lg shadow-zinc-800 overflow-hidden '>
                <img src={car?.imageUrl} alt="" className='w-full h-[80%] flex rounded-t-md hover:scale-105 duration-300 ' />
                <div className='flex gap-3 justify-center'>
                  <p>{car?.company}</p>
                  <p>{car?.model}</p>
                </div>
                <div className='flex gap-3 justify-evenly'>
                  <p className='border border-zinc-500 text-zinc-400 px-4 py-1 rounded font-light '>{car?.fuelType}</p>
                  <p className='border border-zinc-500 text-zinc-400 px-4 py-1 rounded font-light'>{car?.location}</p>
                </div>
                <p className='text-lg font-light text-center text-red-400'>{car?.rent}/- Per Day</p>
                <div className='flex gap-3 justify-center'>
                  <button className='bg-blue-600 px-4 py-1 rounded hover:scale-90 duration-300' onClick={() => carDetails(car._id)}>More Details</button>
                  <button className='bg-pink-600 px-4 py-1 rounded hover:scale-90 duration-300' onClick={() => handleCarBook(car._id)} >Book Now</button>
                </div>
              </div>
            )

            )}
          </div>
        </div>
        <CarDetails open={openModel} car={car} onClose={handleDetailsClose} />
        <BookingForm open={openBookingForm} booking={booking} onClose = {handleBookingClose}/>
      </Layout>
    </div>
  )
}

export default Cars
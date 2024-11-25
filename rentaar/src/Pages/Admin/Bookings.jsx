import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Admin/NavBar'
import axios from 'axios'

const Bookings = () => {

    const [cars, setCars] = useState([])

    const fetchBookedCars = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin/all-booked-cars')
            //console.log(response)
            setCars(response.data.cars)

        } catch (err) {

            console.log(err)
        }
    }
    useEffect(() => {
        fetchBookedCars()
    })
    
    return (
        <div className='flex'>
            <NavBar />
            <div className='flex flex-col gap-10 px-5 py-10'>
                <h1 className='text-2xl font-light'>Rental Bookings</h1>
                {cars.map((car) => (
                    <div className='flex gap-5 border border-black rounded px-7 py-3'>
                        <div className='flex flex-col gap-5 border border-black rounded px-7 py-3'>
                            <h1 className='text-lg font-light'>User Info</h1>
                            <hr className=' bg-black '/>
                            <p><b>Name -</b> {car.name}</p>
                            <p><b>Email -</b> {car.email}</p>
                            <p><b>Phone -</b> {car.phone}</p>
                        </div>
                        <div className='flex flex-col gap-5 border border-black rounded px-7 py-3'>
                            <h1 className='text-lg font-light'>Booking Details</h1>
                            <hr />
                            <div className='grid grid-cols-3 gap-x-6 gap-y-3 '>
                                <p><b>Car -</b> {car.booking.company} {car.booking.model}</p>
                                <p><b>Transmission Type -</b> {car.booking.transmission}</p>
                                <p> <b>Seat No -</b> {car.booking.seat}</p>
                                <p><b>Fuel Type -</b> {car.booking.fuelType}</p>
                                <p><b>Location -</b> {car.booking.location} {car.booking.landmark}</p>
                                <p><b>Rent per Day -</b> {car.booking.rent}</p>
                                <p><b>Start -</b>{car.date.startDate.substring(0, 10)}</p>
                                <p><b>End -</b> {car.date.endDate.substring(0, 10)}</p>
                            </div>
                        </div>

                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Bookings
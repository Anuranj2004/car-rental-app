import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CarDetails from '../carDetails'
import RentalDatechange from './RentalDatechange'

const BookedCars = () => {

    const [cars, setCars] = useState([])
    let email = ''
    const [car, setCar] = useState([])
    const [openModel, setOpenModel] = useState(false)
    const [openDateChangeForm, setopenDateChangeForm] = useState(false)
    const [ _id , set_Id] = useState('')
    //const navigate = useNavigate()


    const fetchBookedCars = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/booked-cars', {
                email
            })
            //console.log(response)
            setCars(response.data.cars)

        } catch (err) {

            console.log(err)
        }
    }

    const carDetails = async (id) => {
        //console.log(id)
        const filteredCar = cars.filter(car => car.booking._id === id)
        setCar(filteredCar[0].booking)
        setOpenModel(true)
    }

    const handleDetailsClose = () => setOpenModel(false)

    const handleDateChangeClose = ()=> setopenDateChangeForm(false)

    const handleCancel = async (_id) => {
        try {
            if (confirm("Do You Want To Cancel..?")) {

                const filteredCar = cars.filter(car => car._id !== _id)
                setCars(filteredCar)
                const response = await axios.post('http://localhost:3000/auth/cancel-booking', {
                    _id
                })
                alert(response.data.message)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const changeDate = async (_id)=>{
        set_Id(_id)
        setopenDateChangeForm(true)
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) // Fetches user info from localStorage
        email = user.email
        fetchBookedCars()
    }, [])

    return (
        <div>
            <Layout>
                <div className='w-full min-h-screen px-10 pt-36'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-x-5 gap-y-5'>
                        {cars.map((car) => (
                            <div className='text-zinc-100 rounded-md flex flex-col gap-5 pb-10 shadow-lg shadow-zinc-800 overflow-hidden '>
                                <img src={car.booking.imageUrl}
                                    onClick={() => carDetails(car.booking._id)}
                                    className='w-full h-[80%] flex rounded-t-md hover:scale-105 duration-300 ' />
                                <div className='flex gap-3 justify-center'>
                                    <p>{car.booking.company}</p>
                                    <p>{car.booking.model}</p>
                                </div>
                                <div className='flex gap-3 justify-evenly'>
                                    <p className='border border-zinc-500 text-zinc-400 px-4 py-1 rounded font-light '>{car.booking.fuelType}</p>
                                    <p className='border border-zinc-500 text-zinc-400 px-4 py-1 rounded font-light'>{car.booking.location}</p>
                                </div>
                                <p className='text-lg font-light text-center text-red-400'>{car.booking.rent}/- Per Day</p>
                                <div className='flex justify-center gap-2 rounded mx-2 py-1 border border-zinc-500 font-light text-xs'>
                                    <p>{car.date.startDate.substring(0, 10)}</p>
                                    <p>to</p>
                                    <p>{car.date.endDate.substring(0, 10)}</p>
                                </div>
                                <div className='flex gap-3 justify-evenly mt-3'>
                                    <button className='bg-green-600 px-4 py-1 rounded hover:scale-90 duration-300' onClick={() => changeDate(car._id)}>Change Date</button>
                                    <button className='bg-red-600 px-4 py-1 rounded hover:scale-90 duration-300' onClick={() => handleCancel(car._id)}>Cancel</button>
                                </div>
                            </div>

                        )

                        )}
                    </div>
                </div>
                <CarDetails open={openModel} car={car} onClose={handleDetailsClose} />
                <RentalDatechange open={openDateChangeForm}  _id={_id} onClose={handleDateChangeClose}/>
            </Layout>
        </div>
    )

}

export default BookedCars
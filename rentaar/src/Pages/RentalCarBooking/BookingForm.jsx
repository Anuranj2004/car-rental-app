import React, { useEffect, useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { MdOutlineClose } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ open, booking, onClose }) => {

    const navigate = useNavigate()

    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });

    const [user, setUser] = useState({})
    

    const handleBooking = async (e) => {
        try {
            e.preventDefault()
           
            const email = user.email;
            const name = user.name;
            const phone = user.phone
            const response = await axios.post('http://localhost:3000/auth/booking', {
                email,
                name,
                phone,
                booking,
                date
            })
            alert(response.data.message)
            navigate('/booked-cars')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    

    if (!open) {
        return null
    }
    return (
        <div className='w-full min-h-screen flex justify-center items-end fixed inset-0 bg-black bg-opacity-70 pb-14 backdrop-blur-sm'>
            <div className='max-w-96 bg-slate-300 px-10 py-5 rounded flex flex-col gap-5'>
                <div className='flex justify-between '>
                    <h1 className='text-xl font-light text-center'>{booking.model} Booking</h1>
                    <MdOutlineClose className='text-2xl' onClick={onClose} />
                </div>
                <hr />
                <form className='flex flex-col gap-10 items-center'>
                    <Datepicker
                        separator="to"
                        placeholder="Date Range for Rent"
                        value={date}
                        onChange={newValue => setDate(newValue)}

                    />
                    <button className='bg-pink-600 text-zinc-100 px-4 py-1 rounded' onClick={handleBooking}>Book</button>
                </form>

            </div>
        </div>
    )
}

export default BookingForm
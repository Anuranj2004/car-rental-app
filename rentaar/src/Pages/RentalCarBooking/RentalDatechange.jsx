import React, { useEffect, useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { MdOutlineClose } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RentalDatechange = ({ open, _id, onClose }) => {

    const navigate = useNavigate()

    const [date, setDate] = useState({
        startDate: null,
        endDate: null
    });

    const handleDateChange = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:3000/auth/update-booking-date', {
                _id,
                date
            })
            alert(response.data.message)
            navigate('/cars')
        } catch (err) {
            console.log(err)
        }
    }

    if (!open) {
        return null
    }
    return (
        <div className='w-full min-h-screen flex justify-center items-end fixed inset-0 bg-black bg-opacity-70 pb-14 backdrop-blur-sm'>
            <div className=' bg-slate-300 px-10 py-5 rounded flex flex-col gap-5'>
                <div className='flex justify-between '>
                    <h1 className='text-xl font-light text-center'>Change Date Range For Rental</h1>
                    <MdOutlineClose className='text-2xl' onClick={onClose} />
                </div>
                <hr />
                <form className='flex flex-col gap-10 items-center'>
                    <Datepicker
                        separator="to"
                        placeholder="Date Range for Rent"
                        value={date}
                        onChange={newValue => setDate(newValue)}
                        required

                    />
                    <button className='bg-pink-600 text-zinc-100 px-4 py-1 rounded' onClick={handleDateChange}>Update</button>
                </form>

            </div>
        </div>
    )
}

export default RentalDatechange
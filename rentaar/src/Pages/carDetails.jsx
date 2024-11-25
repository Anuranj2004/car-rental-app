import axios from 'axios';
import React, { useEffect } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CarDetails = ({ open, car, onClose }) => {
  

  if (!open) {
    return null
  }
  return (
    <div className='w-full min-h-screen flex justify-center items-center fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm'>
      <div className='text-white  w-full  flex flex-col gap-5 mx-10 py-5 shadow-lg shadow-zinc-900 '>
        <div className='flex justify-evenly '>
        <h1 className='text-xl font-light text-center'>{car.model} Details</h1>
        <MdOutlineClose className='text-2xl' onClick={onClose}/>
        </div>
        <hr />
        <div className='flex gap-10 justify-center'>
          <img src={car.imageUrl} alt="car image" className='w-[40%] h-[100%] opacity-80 rounded-sm' />
          <div className='grid grid-cols-3 gap-x-5 gap-y-7'>
            <div className='flex flex-col gap-3'>
              <p>Made</p>
              <hr />
              <p className='font-light text-sm'>{car.company}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Model</p>
              <hr />
              <p className='font-light text-sm'>{car.model}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Transmission Type</p>
              <hr />
              <p className='font-light text-sm'>{car.transmission}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Seat No.</p>
              <hr />
              <p className='font-light text-sm'>{car.seat}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Fuel Type</p>
              <hr />
              <p className='font-light text-sm'>{car.fuelType}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Location</p>
              <hr />
              <p className='font-light text-sm'>{car.location}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Rent</p>
              <hr />
              <p className='font-light text-sm'>{car.rent}/- Per Day</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Landmark</p>
              <hr />
              <p className='font-light text-sm'>{car.landmark}</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Features</p>
              <hr />
              <div className='flex flex-col gap-2'>
                {
                  car.features.map((feature, index) => (
                    <li className='font-light text-sm'>{feature}</li>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails
import React, { useEffect, useState } from 'react'
import NavBar from '../../Components/Admin/NavBar'
import axios from 'axios'


const Dashboard = () => {

  const [cars, setCars] = useState([])

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:3000/admin/car-details')
      setCars(response.data.cars)

    } catch (err) {
      console.log(err)
    }
  }

  const handleRemove = async (_id)=>{
    try{
      if(confirm("Are You Sure to Remove")){
      const response = await axios.post('http://localhost:3000/admin/remove-car',{
        _id
      })
      alert(response.data.message)
      const filteredCars = cars.filter(car=> car._id !== _id)
      setCars(filteredCars)
    }


    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  //console.log(cars)

  return (
    <div className='flex'>
      <NavBar />
      <div className='flex flex-col gap-10 px-5 py-10 text-2xl font-light w-full'>
        <h1>Rentaar Admin Dashboard</h1>
        <div className='grid grid-cols-4 gap-x-5 gap-y-5'>
          {cars.map((car, index) => (
            <div className='flex flex-col gap-5 justify-center shadow-lg w-full shadow-zinc-200 rounded '>
              <img src={car?.imageUrl} alt="" />
              <div className='flex gap-3 text-sm justify-center '>
                <p className='text-center'>{car?.company}</p>
                <p className='text-center'>{car?.model}</p>
              </div>
              <hr />
              <div className='flex gap-3 justify-center px-5 text-sm mb-6'>
                <button className='bg-red-500 text-white  px-4 py-1 rounded hover:scale-110 duration-200' onClick={()=>handleRemove(car._id)}>Remove</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import NavBar from '../../Components/Admin/NavBar'
import axios from 'axios'
import app from '../../Firebase'

const AddCar = () => {
  const [company, setCompany] = useState('')
  const [model, setModel] = useState('')
  const [transmission, setTransmission] = useState('')
  const [seat, setSeat] = useState()
  const [fuelType, setFuelType] = useState('')
  const [location, setLocation] = useState('')
  const [rent, setRent] = useState()
  const [landmark, setLandmark] = useState('')
  const [feature, setFeature] = useState('')
  const [features, setFeatures] = useState([])
  const [image, setImage] = useState()
  const [imageUrl , setImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)

  const addFeature = (e) => {
    e.preventDefault()
    setFeatures(array => [...array, feature])
    setFeature('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(image)
      setUploading(true)
      const storage = await getStorage(app)
      const storageRef = ref(storage, "carImages/" + image.name)
      await uploadBytes(storageRef, image)
      const url = await getDownloadURL(storageRef)
      await setImageUrl(url)
      console.log(imageUrl)

      const res = await axios.post('http://localhost:3000/admin/addcar',{
        company,
        model,
        transmission,
        seat,
        fuelType,
        location,
        rent,
        landmark,
        features,
        imageUrl
      })
      alert(res.data.message)
      setFeatures([])
      

    } catch (err) {
      alert(err.response.data.message)
    }finally{
      setUploading(false)
      
    }
  }

  return (
    <div className='flex'>
      <NavBar />
      <div className='w-full flex flex-col items-center gap-5 mt-10 mb-10 px-7 py-7 bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-lg mx-10'>
        <h1 className='text-xl font-light text-white'>Add Rental Car</h1>
        <div className='mx-10 my-5 w-full'>
          <form
            className=' grid md:grid-cols-2 w-full gap-x-5 gap-y-5'>
            <input type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder='Company Name'
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 ' />

            <input type="text"
              placeholder='Model Name'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 ' />

            <select name="transmission" id="transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className='bg-transparent outline-none px-4 py-2 border-2 '>
              <option value="Select Transmission Type">Select Transmission Type</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>

            <input type="number" name="seat" id="seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
              placeholder='No. of Seats'
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 rounded-lg' />

            <select name="fuel" id="fuel"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className='bg-transparent outline-none px-4 py-2 border-2 rounded-lg'>
              <option value="Select Fuel Type">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>

            <select name="location" id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='bg-transparent outline-none px-4 py-2 border-2 rounded-lg'>
              <option value="Select Location">Select Location</option>
              <option value="Kochi">Kochi</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Calicut">Calicut</option>
            </select>

            <input type="file" name="image" id="image"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder='Only jgeg files'
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 rounded-lg' />

            <input type="number" name="price" id="price"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              placeholder='Rent Per Day'
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 rounded-lg' />

            <input type="text"
              placeholder='Nearest Landmark'
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className='bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 rounded-lg' />

            <div className='w-full flex gap-3'>
              <input type="text"
                placeholder='Features'
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
                className='w-full flex-2 bg-transparent outline-none px-4 py-2 placeholder:text-zinc-950 border-2 rounded-lg' />
              <button className='w-full flex-1 px-2 py-1 border hover:bg-zinc-100 hover:text-black rounded-lg hover:scale-105 duration-300'
                onClick={addFeature}
              >Add</button>
            </div>

            <input type="submit" value={uploading?"Submitting..":"Submit"}
            disabled={uploading}
              onClick={handleSubmit}
              className='m-auto px-4 py-2 w-36 border border-zinc-100 hover:bg-zinc-100 hover:text-black rounded-lg hover:scale-105 duration-300' />


          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCar
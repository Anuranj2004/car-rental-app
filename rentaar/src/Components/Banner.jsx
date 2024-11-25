import React from 'react'

const Banner = (props) => {
  return (
    <div className='min-h-screen shadow-2xl shadow-zinc-900 '>
      <h1 className='absolute text-zinc-300 bottom-20 left-8 text-5xl font-bold'>{props.tag}</h1>
        <img src={props.img} alt="banner" className='max-h-screen min-h-screen w-full opacity-20' />
    </div>
  )
}

export default Banner
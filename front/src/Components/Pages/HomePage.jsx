import React from 'react'
import HomeImg from '../../images/home.png'
function HomePage() {
  return (
    <div className='pt-20'>
      <main className='flex justify-around items-center'>
        <div className='w-[700px] flex flex-col space-y-10'>
          <h2 className='text-5xl font-semibold'>Welcome to MERN Stack Project</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus esse ducimus officiis voluptates saepe id error, quaerat iure illum veniam reiciendis repellendus nemo incidunt aliquam eaque unde dolorum corrupti!s</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus esse ducimus officiis voluptates saepe id error, quaerat iure illum veniam reiciendis repellendus nemo incidunt aliquam eaque unde dolorum corrupti!s</p>
        </div>
        <img width="500" height="500" src={HomeImg} alt="Home page image" />
      </main>
      <div className='flex flex-col  items-center pb-20 pt-20' >
        <h3 className='text-5xl font-bold underline pb-8'>Made Using</h3>
        <div className='flex  space-x-4'>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-bold'>React</div>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-bold'>Tailwind CSS</div>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-bold'>Node.js</div>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-semibold'>MongoDb</div>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-bold'>Zod</div>
        <div className='w-28 h-32 rounded-lg shadow-md shadow-white bg-gray-200 flex justify-center items-center text-gray-800 text-2xl font-bold'>JWT</div>

        </div>
        
      </div>
    </div>
  )
}

export default HomePage
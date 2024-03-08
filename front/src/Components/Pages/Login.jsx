import React, { useState } from 'react'
import LoginImg from '../../images/login.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'


function Login() {
  const[user, setuser] = useState({ 
    email:"",
    password:""
  })

  const [error, setError] = useState()

  const storeTokeninLS = useAuth()
  const navigate = useNavigate()

  // handling form submit

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      }, body : JSON.stringify(user)
    })

    if(response.ok) {
      const res_data = await response.json()
      
      storeTokeninLS(res_data.token)
      setuser({ email:"", password:"" })
      navigate('/')
    } else{
      const res_data = await response.json()
      console.log(res_data)
      setError(res_data)

    }

    } catch (error) {
      console.log(error)
      
    }
 
  }

  // updating value as user enter value

  const handleInputChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    setuser({
      ...user,
      [name]: value,
    }) }
  

  return (
    <div className='flex  justify-around items-center'>
      <img className=' rounded-xl' height="500" width="500" src={LoginImg} alt="registration image" />
      <main className='flex flex-col font-mono items-start'>
        
      <h2 className='text-4xl  font-semibold underline-offset-2 underline'>Login Form</h2>
      {
        error && (
          <>
          <p className='text-red-400 '>{error.message}</p>
      <p className='text-red-400 text-md'>{error.extraDetails}</p></>
        )
      }
        {/* form to Register */}

        <form onSubmit={handleFormSubmit} className='space-y-4 mt-4'>

      

            {/* email */}
            <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="email">Email</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.email} type='email' name="email" id="email"  placeholder='email' required  />
            </div>

            {/* password */}
            <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="username">Password</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.password} type='password' name="password" id="password"  placeholder='password' required  />
            </div>
       
        <button  type='submit' className='text-gray-800 hover:bg-gray-600 hover:text-gray-300 duration-500 font-semibold px-4 py-2 text-xl rounded-lg bg-gray-300'>Login</button>
        </form>
        


      </main>
    </div>
  )
}

export default Login
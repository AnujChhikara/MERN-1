import React, { useState } from 'react'
import RegisterImg from '../../images/register.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'


function Register() {
  const[user, setuser] = useState({
    username: "",
    email:"",
    phone:"",
    password:""
  })

  const [error, setError] = useState()


 const storeTokeninLS = useAuth()

  const navigate = useNavigate()

  // handling form submit

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      }, body : JSON.stringify(user)
    })


    if(response.ok){
      
      const res_data = await response.json()
      
      storeTokeninLS(res_data.token)
      setuser({
        username: "",
    email:"",
    phone:"",
    password:""

      })
      navigate('/login')
    } else{
      const res_data = await response.json()
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
      <img className=' rounded-xl' height="500" width="500" src={RegisterImg} alt="registration image" />
      <main className='flex flex-col font-mono items-start'>
        
      <h2 className='text-4xl  font-semibold underline-offset-2 underline mb-2'>Registration Form</h2>
      
      
        
        {/* form to Register */}

        <form onSubmit={handleFormSubmit} className='space-y-4 mt-4'>

          {/* username */}
          <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="username">Username</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.username} type='text' name="username" id="username" placeholder='username' required />
            </div>

            {/* email */}
            <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="email">Email</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.email} type='email' name="email" id="email"  placeholder='email' required  />
            </div>

            {/* Phone */}
            <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="username">Phone</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.phone} type='number' name="phone" id="phone"  placeholder='phone' required  />
            </div>

            {/* password */}
            <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="username">Password</label>
          <input className='w-96 h-10 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.password} type='password' name="password" id="password"  placeholder='password' required  />
            </div>
       
        <button  type='submit' className='text-gray-800 hover:bg-gray-600 hover:text-gray-300 duration-500 font-semibold px-4 py-2 text-xl rounded-lg bg-gray-300'>Register Now</button>
        </form>
        


      </main>
    </div>
  )
}

export default Register
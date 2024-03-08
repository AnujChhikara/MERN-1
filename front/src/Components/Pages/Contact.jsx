import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactImg from '../../images/support.png'

function Contact() {
  const[user, setuser] = useState({
    username: "",
    email:"",
    message:""
  })
 
 

  const navigate = useNavigate()
  // handling form submit

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      }, body : JSON.stringify(user)
    })

    if(response.ok) {
      setuser({
        username: "",
        email:"",
        message:""
      })
      navigate('/')
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
    <div>
    <div className='flex  justify-around items-center'>
      <img className=' rounded-xl' height="500" width="500" src={ContactImg} alt="registration image" />
      <main className='flex flex-col font-mono items-start'>
        
      <h2 className='text-4xl  font-semibold underline-offset-2 underline'>Contact Us</h2>
        
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

           {/* message */}
           <div className='flex flex-col items-start space-y-2'>
          <label className='text-xl' htmlFor="message">Message</label>
          <textarea className='w-96 h-20 rounded-lg px-3 py-1' onChange={handleInputChange} value={user.message} type='text' name="message" id="message"  placeholder='write your message here ...' required  />
            </div>

           
       
        <button  type='submit' className='text-gray-800 hover:bg-gray-600 hover:text-gray-300 duration-500 font-semibold px-4 py-2 text-xl rounded-lg bg-gray-300'>Send Message</button>
        </form>
        


      </main>

      
    </div>
    
      
    </div>
  )
}

export default Contact
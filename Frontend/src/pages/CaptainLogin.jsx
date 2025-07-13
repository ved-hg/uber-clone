import React, { useContext } from 'react'
import { useState } from 'react'
import uber from '../assets/images/uber_cap.png'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/Captaincontext'
const CaptainLogin = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    
    const {captain,setCaptain} = React.useContext(CaptainDataContext);
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const captain ={
            email: email,
            password: password};


            try {
              const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/captains/loginCaptain`,
                captain,
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
              console.log('Success:', response.data);
          
              if (response.status === 200) {
                const data = response.data;
                setCaptain(data.user);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
              }
            } catch (error) {
              if (error.response) {
                console.error('Error:', error.response.data); // Logs server-side validation errors
              } else {
                console.error('Unexpected error:', error.message);
              }
            }  
        setEmail('');
        setPassword('');
    }



    
  return (
   
    
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
<div>
        <Link to="/"
       >
             <img className="w-40  mb-10 rounded-md   "src={uber} alt="Uber logo" /></Link>
            </div>
   
       <form onSubmit={(e)=>{handleSubmit(e)}}>
       <h3 className='text-xl font-bold mb-2'>What's your email?</h3>
       <input 
        required 
        value= {email}
        onChange={(e) => setEmail(e.target.value)}  
        className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-full text-lg placeholder:text-base'
        type="email"
         placeholder='email@example.com'
         />

       <h3 className='text-xl font-bold mb-2'>Enter Passsowrd</h3>
       <input 
        required 
        value= {password}
        onChange={(e) => setPassword(e.target.value)} 
         className='bg-[#eeeeee] rounded px-2 py-2 mb-7 border w-full text-lg placeholder:text-base'
        type="password" 
        placeholder='password'/>
       <button
        className='bg-[#111] text-white font-semibold rounded  py-2 mb-4 border w-full text-xl '>Login</button>

      <p className='font-medium text-center'>Join a fleet? <Link to="/captain-signup" className="text-blue-600 ml-3 font-medium ">Register as Captain</Link></p> 
       </form>
        </div>
   

    <div>
<Link to="/login"
className='bg-[#31d96e] flex justify-center text-white font-semibold rounded  py-2 mb-7 border w-full text-xl '>
    Sign in as user</Link>
    </div>
    </div>
  )
}
 
export default CaptainLogin
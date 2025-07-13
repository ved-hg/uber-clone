import React from 'react'
import uber from '../assets/images/image.png'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import { useContext } from 'react'

import {useState, useEffect} from 'react'



const UserLogin = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
// usestate for user data as an object
const[userData, setUserData] = useState({})
const [user,setuser] = React.useContext(UserDataContext);
const navigate = useNavigate();
const [isSubmitted, setIsSubmitted] = useState(false); 

const handleSubmit = async (e) => {
    e.preventDefault();
    const userData= ({
        email: email,
        password: password});

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
if(response.status === 200){    
const data = response.data;
setuser(data.user);
localStorage.setItem('token', data.token);
setIsSubmitted(true);

    
}
setEmail('');
    setPassword('');

}
useEffect(() => {
  if (isSubmitted) {
      navigate('/home'); // Navigate only after successful submission
  }
}, [isSubmitted, navigate]);


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
<div>
        <Link to="/"
       >
             <img className="w-20  mb-10 rounded-md   "src={uber} alt="Uber logo" /></Link>
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
       <button type='submit'
        className='bg-[#111] text-white font-semibold rounded  py-2 mb-4 border w-full text-xl '>Login</button>

      <p className='font-medium text-center'>New here? <Link to="/signup" className="text-blue-600 ml-3 font-medium ">create new Account</Link></p> 
       </form>
        </div>
   

    <div>
<Link to="/captain-login"
className='bg-[#dc9934] flex justify-center text-white font-semibold rounded  py-2 mb-7 border w-full text-xl '>
    Sign in as captain</Link>
    </div>
    </div>
  )
}

export default UserLogin
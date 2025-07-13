import React from 'react'
import uber from '../assets/images/image.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import {useContext} from 'react'

// response.Status plays a big role
// if response.status is 201, it means the user has been created successfully
// if response.status is 200, it means the user has been logged in successfully

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // Track successful signup
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);

  // Redirect if already logged in (token exists in localStorage)
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          navigate('/home');
      }
  }, [navigate]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const newUser = {
          fullname: {
              firstname,
              lastname,
          },
          email,
          password,
      };

      try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
          if (response.status === 201) {
              const data = response.data;
              setUser(data.user); // Store the user in context
              localStorage.setItem('token', data.token); // Store the token in localStorage
              setIsSignedUp(true); // Set signup success flag
          }
      } catch (error) {
          console.error('Error during signup:', error.message);
      }

      // Clear form fields after submission
      setEmail('');
      setPassword('');
      setFirstname('');
      setLastname('');
  };

  // After successful signup, navigate to home
  useEffect(() => {
      if (isSignedUp) {
          navigate('/home'); // Navigate to home after successful signup
      }
  }, [isSignedUp, navigate]);
    
   
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
<div>
        <Link to="/"
       >
             <img className="w-20  mb-10 rounded-md   "src={uber} alt="Uber logo" /></Link>
            </div>
   
   <form onSubmit={(e)=>{handleSubmit(e)}}>
   <h3 className='text-lg font-bold mb-2'>What's your name?</h3>
   <div className='flex gap-4 mb-5'>
   <input 
    required 
    value= {firstname}
    onChange={(e) => setFirstname(e.target.value)}  
    className='bg-[#eeeeee] rounded w-1/2 px-2 py-2  border text-lg placeholder:text-base'
    type="text"
     placeholder='firstname'
     />
     <input 
    required 
    value= {lastname}
    onChange={(e) => setLastname(e.target.value)}  
    className='bg-[#eeeeee] rounded w-1/2 px-2 py-2 border text-lg placeholder:text-base'
    type="text"
     placeholder='lastname'
     />
   </div>
   <h3 className='text-lg font-bold mb-2'>What's your email?</h3>
   <input 
    required 
    value= {email}
    onChange={(e) => setEmail(e.target.value)}  
    className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-full text-lg placeholder:text-base'
    type="email"
     placeholder='email@example.com'
     />

   <h3 className='text-lg font-bold mb-2'>Enter Passsowrd</h3>
   <input 
    required 
    value= {password}
    onChange={(e) => setPassword(e.target.value)}  
     className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-full text-lg placeholder:text-base'
    type="password" 
    placeholder='password'/>
   <button
    className='bg-[#111] text-white font-semibold rounded  py-2 mb-4 border w-full text-xl '>Create account</button>

  
   </form>
   <p className='font-medium text-center'>Already have an account? <Link to="/login" className="text-blue-600 ml-2 font-medium ">Login here</Link></p>
    </div>

<div>
    <p className='text-[9px] mb-3 '>By proceeding, you agree to Uber's Terms of Service and acknowledge you have read the Privacy Policy. You also consent to receive emails and messages from Uber regarding account updates, promotions, and more. You can unsubscribe anytime.</p>
</div>

</div>
  )
}

export default UserSignup
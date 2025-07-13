import React from 'react'
import uber from '../assets/images/uber_cap.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useContext } from 'react'
import { CaptainDataContext } from '../context/Captaincontext'
import axios from 'axios'
const CaptainSignup = () => {
  const navigate = useNavigate();
     const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [firstname, setFirstname] = useState('')
        const [lastname, setLastname] = useState('')
        const [vehicleColor, setVehicleColor] = useState('')
        const [vehicleType, setVehicleType] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        
        const[userData, setUserData] = useState({})
         const {captain,setCaptain} = React.useContext(CaptainDataContext);
        const handleSubmit = async  (e) => {
    
            e.preventDefault();
            // prevents reloading of page after pressing login
            const captainData = {
                email: email,
                password: password,
                fullname:{firstname: firstname,
                lastname: lastname},
                vehicle :{
               color: vehicleColor,
                vehicleType: vehicleType,
               capacity: vehicleCapacity,
                plate: vehiclePlate}};
                try {
                  const response = await axios.post(
                    `${import.meta.env.VITE_BASE_URL}/captains/registerCaptain`,
                    captainData,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    }
                  );
                  console.log('Success:', response.data);
              
                  if (response.status === 201) {
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
            setFirstname('');
            setLastname('');
            setVehicleColor('');
            setVehicleType('');
            setVehicleCapacity('');
            setVehiclePlate('');
            
        }
  return (
    <div className='p-7 py-5 h-screen flex flex-col justify-between'>
    <div>
        <div>
        <Link to="/"
       >
             <img className="w-40  mb-2 rounded-md   "src={uber} alt="Uber logo" /></Link>
            </div>
   
   <form onSubmit={(e)=>{handleSubmit(e)}}>
   <h3 className='text-lg font-bold mb-2'>What's your name?</h3>
   <div className='flex gap-4 mb-2'>
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
    className='bg-[#eeeeee] rounded px-2 py-2 mb-1 border w-full text-lg placeholder:text-base'
    type="email"
     placeholder='email@example.com'
     />

   <h3 className='text-lg font-bold mb-2'>Enter Passsowrd</h3>
   <input 
    required 
    value= {password}
    onChange={(e) => setPassword(e.target.value)}  
     className='bg-[#eeeeee] rounded px-2 py-2 mb-2 border w-full text-lg placeholder:text-base'
    type="password" 
    placeholder='password'/>
    <h3 className='text-lg font-bold mb-2'>Vehicle Information</h3>
    <div className='flex gap-4 mb-1'>
    <input
    required
    value= {vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    className='bg-[#eeeeee]  rounded px-2 py-2 mb-1 border w-full text-lg placeholder:text-base'
    type="text"
    placeholder='Vehicle Color'/>
    <input
    required
    value= {vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    className='bg-[#eeeeee] rounded  px-2 py-2 mb-1 border w-full text-lg placeholder:text-base'
    type="text"
    placeholder='Vehicle Plate'/>
    </div>
    <div className='flex gap-4 mb-2'>
    <select
    required
    value= {vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
    className='bg-[#eeeeee] rounded  px-2 py-2 mb-4 border w-full text-lg placeholder:text-base'
   >
    <option value = "" disabled >Vehicle Type</option>
      <option value="car">Car</option>
      <option value="bike">Bike</option>
      <option value="auto">Auto</option>
    </select>
    <input
    required
    value= {vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    className='bg-[#eeeeee] rounded px-2 py-2 mb-4 border w-full text-lg placeholder:text-base'
    type="number"
    placeholder="Vehicle capacity"/>
    
    </div>
   <button
    className='bg-[#111] text-white font-semibold rounded  py-2 mb-4 border w-full text-xl '>Create Captain Account</button>

  
   </form>
   <p className='font-medium text-center mb-5'>Already have an account? <Link to="/captain-login" className="text-blue-600 ml-2 font-medium ">Login here</Link></p>
    </div>

<div>
    <p className='text-[9px] mb-3 '>This site is protected by reCAPTHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span></p>
</div>

</div>
  )
}

export default CaptainSignup
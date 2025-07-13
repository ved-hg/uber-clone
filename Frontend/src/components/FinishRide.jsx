import React from 'react'
import { Link } from 'react-router-dom'
import driver from '../assets/images/driver.jpg'

const FinishRide = (props) => {

  return (
    <div className='h-screen'>
              <h5 onClick={()=>{
               props.setfinishRidePanel(false)
                  }} className='p-3 text-center absolute w-[90%] top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
      
      <h3 className='text-2xl font-semibold mt-2 mb-3'>Finish this Ride</h3>
      <div className='flex items-center justify-between bg-yellow-400 rounded-lg p-2 mt-4'>
       <div className='flex items-center gap-3 '>
           <img className='h-10 w-10 object-cover rounded-full' src={driver} alt="" />
           <h2 className='text-lg font-medium '>Somveer Singh</h2>
       </div>
       <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
         <div className='flex flex-col gap-3 justify-between items-center'>
          
          <div className='w-full mt-5'>
      <div className='flex items-center gap-5  p-3 border-b-2'>
      <i className="text-lg ri-map-pin-2-line"></i>
      <div ><h3 className='text-lg font-medium'>562/11-A</h3>
      <p className=' text-gray-600 text-sm mt-[-5px]'>Royal Palace, Sector-38</p></div>
      </div>
      
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="text-lg ri-map-pin-3-line"></i>
      <div ><h3 className='text-lg font-medium'>Shop no. 2</h3>
      <p className=' text-gray-600 text-sm mt-[-5px]'>Great Market, DLF</p></div>
      </div>
      <div>
      <div className='flex items-center gap-5 p-3  border-b-2'>
      <i className="text-lg ri-currency-line"></i>
      <div ><h3 className='text-lg font-medium'>₹193.50</h3>
      <p className=' text-gray-600 text-sm mt-[-5px]'>Cash Cash</p></div>
      </div>
          </div>
          </div>
          
         <div className='mt-4 flex flex-col items-center w-full'>
         

         <Link to='/captain-home' className='w-full flex justify-center  bg-green-500 text-white font-semibold p-2
   rounded-xl  text-xl '> Finish Ride</Link>
        <p className='text-red-500 font-semibold font-serif mt-6 text-sm w-[80%] text-center leading-3'>Click on Finish ride button if you have received the payment</p>

      
         </div>
         
         
         </div> 
         
         
         
         
          </div>
  )
}

export default FinishRide
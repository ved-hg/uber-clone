import React from 'react'
import map from '../assets/images/map2.png'
import car from '../assets/images/car2.webp'
import {Link, useNavigate} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed ml-4 mt-4 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-bold ri-home-5-line"></i>
        </Link>
        <div className='h-1/2'>
            <img className="h-full  w-full object-cover"src={map} alt="" />
        </div>
        <div className='h-1/2 p-4'>
<button className='w-full mt-5 bg-green-500 text-white font-semibold p-2
  rounded-xl  '>Make a Payment</button>
<div className='flex items-center justify-between'>
   <img  className="h-14 "src={car} alt="" />
  <div className='text-right'>
    <h2 className='text-lg font-semibold'>Somveer</h2>
    <h4 className='text-2xl font-bold mt-[-10px]'>HR26 AB 1234</h4>
    <p className='text-sm text-gray-600'>Maruti Suzuki Wagnor</p>
  </div>

</div>
          <div className='flex flex-col gap-3 justify-between items-center'>
      
           <div className='w-full mt-5'>
      
       
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
           
          
          
          </div>
        </div>
    </div>
  )
}

export default Riding
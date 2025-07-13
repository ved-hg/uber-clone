import React from 'react'
import driver from '../assets/images/driver.jpg'
import car from '../assets/images/car2.webp'
const ConfirmedRide = (props) => {
  return (
    <div>
               <h5 onClick={()=>{
                 props.setridePopupPanel(false)
                   }} className='p-3 text-center absolute w-[90%] top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
       
       <h3 className='text-2xl font-semibold mt-2 mb-3'>Ride For You!</h3>
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
           <button onClick={()=>{
       
      
       
    }}className='w-full mt-4 bg-green-600 text-white font-semibold p-2
    rounded-xl  '> Confirm</button>
           <button onClick={()=>{
       props.setridePopupPanel(false)
             
           }}className='w-full mt-1 bg-gray-400 text-gray-700 font-semibold p-2
         rounded-xl  '> Ignore</button>
          
          
          </div> 
          
          
          
          
           </div>
  )
}

export default ConfirmedRide
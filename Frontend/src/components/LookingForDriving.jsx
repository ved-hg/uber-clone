import React from 'react'
import car from '../assets/images/car2.webp'
const LookingForDriving = (props) => {
  return (
       <div>
            <h5 onClick={()=>{
                  props.setvehicleFound(false)
                }} className='p-3 text-center absolute w-[90%] top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
    
    <h3 className='text-2xl font-semibold mt-3 mb-3'>looking fo a Driver</h3>
       <div className='flex flex-col gap-3 justify-between items-center'>
        <img  className="h-20 "src={car} alt="" />
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
        
       
       
       </div> 
       
       
       
       
        </div>
  )
}

export default LookingForDriving
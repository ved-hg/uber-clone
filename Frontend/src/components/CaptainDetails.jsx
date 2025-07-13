import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/Captaincontext'
import driver from '../assets/images/driver.jpg'

export const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)
  return (
    <div>
    <div className='flex items-center justify-between'>
    <div className='flex items-center justify-start gap-3'> 
    <img className='h-10 w-10 rounded-full object-cover' src={driver} alt="" />
    <h4 className='text-lg font-medium'>Somveer</h4>
  </div>
  <div>
    <h4 className='text-xl font-semibold'>₹295.50</h4>
    <p className='text-sm font-mono text-center text-yellow-400 bg-gray-600'>Earned</p>
  </div>
  </div>
  <div className='flex p-4 mt-3 bg-gray-200 rounded-xl justify-center gap-5 items-start'>
    <div className='text-center '>
    <i className="text-3xl mb-2 font-thin  ri-timer-2-line"></i>
    <h5 className='text-lg font-medium'>10.2</h5>
    <p className='text-sm text-gray-600'>Hours Online</p>
    </div>
    <div className='text-center '>
    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
    <h5 className='text-lg font-medium'>10.2</h5>
    <p className='text-sm text-gray-600'>Hours Online</p>
    </div>
    <div className='text-center '>
    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
    <h5 className='text-lg font-medium'>10.2</h5>
    <p className='text-sm text-gray-600'>Hours Online</p>
  
    </div>
  </div>
  </div>
  )
}

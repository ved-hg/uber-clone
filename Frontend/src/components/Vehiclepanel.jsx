import React from 'react'
import car from '../assets/images/car2.webp'
import bike from '../assets/images/bike.webp'
import auto from '../assets/images/auto.webp'

const Vehiclepanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
              props.setVehiclePanel(false)
            }} className='p-3 text-center absolute w-[90%] top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
              <h3 className='text-2xl font-semibold mt-3 mb-3'>Choose a Vehicle</h3>
<div onClick={()=>{
props.setConformPanel(true)
}}
className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between'>
  <img className='h-14' src={car} alt="" />
  <div className=' w-1/2 ml-2' >
    <h4 className='font-medium text-md leading-3'>Uber Go <span><i className="ri-user-fill "></i> 4</span></h4>
    <h5 className='font-medium text-sm '>2 mins away</h5>
    <p className='font-normal text-xs text-gray-500'>Affordable, Compact rides</p>
  </div>
  <h2 className='text-xl font-semibold'>₹193.50</h2>
</div>
<div onClick={()=>{
props.setConformPanel(true)
}}
className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between'>
  <img className='h-12 ml-[-12px]' src={bike} alt="" />
  <div className=' w-1/2 ml-[-44px]' >
    <h4 className='font-medium text-md leading-3'>Moto <span><i className="ri-user-fill "></i> 1</span></h4>
    <h5 className='font-medium text-sm '>3 mins away</h5>
    <p className='font-normal text-xs text-gray-500'>Affordable motorcycle rides</p>
  </div>
  <h2 className='text-xl font-semibold'>₹65</h2>
</div>
<div onClick={()=>{
props.setConformPanel(true)
}}
className='flex border-2 active:border-black mb-2 rounded-xl p-3 items-center justify-between'>
  <img className='h-12' src={auto} alt="" />
  <div className=' w-1/2' >
    <h4 className='font-medium text-md leading-3'>Uber Auto <span><i className="ri-user-fill "></i> 3</span></h4>
    <h5 className='font-medium text-sm '>1 mins away</h5>
    <p className='font-normal text-xs text-gray-500'>Affordable Auto rides</p>
  </div>
  <h2 className='text-xl font-semibold'>₹118.50</h2>
</div>
    </div>
  )
}

export default Vehiclepanel
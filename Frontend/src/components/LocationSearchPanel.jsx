import React from 'react'
import car from '../assets/images/car2.webp'
const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'destination') {
        setDestination(suggestion)
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
}
  return (
    <div className='p-4'>
     
{suggestions.map(function(elem,idx){
  return <div key={idx} onClick={()=>{
    props.setVehiclePanel(true)
    props.setPanelOpen(false)
    handleSuggestionClick(elem)
  }}className='flex p-3 gap-2 border-2 rounded-xl border-gray-100 active:border-black my-3 items-center justify start'>
  <h2 className='bg-gray-300 p-4 h-9 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
     <h4 className='font-semibold text-lg'>{elem}</h4>
   </div>
})}
 {/* this a sample data */}

      {/* <div className='flex p-3 gap-2 border-2 rounded-xl border-gray-100 active:border-black my-3 items-center justify start'>
     <h2 className='bg-gray-300 p-4 h-9 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-semibold text-lg'>E44 , Sector-23 , Gurgaon</h4>
      </div>
      <div className='flex p-3 gap-2 border-2 rounded-xl my-3  border-gray-100   active:border-black items-center justify start'>
     <h2 className='bg-gray-300 p-4 h-9 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-semibold text-lg'>E44 , Sector-23 , Gurgaon</h4>
      </div>
      <div className='flex p-3 gap-2 border-2  rounded-xl my-3  border-gray-100 active:border-black items-center justify start'>
     <h2 className='bg-gray-300 p-4 h-9 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-semibold text-lg'>E44 , Sector-23 , Gurgaon</h4>
      </div> */}
      
     
    </div>
  )
}

export default LocationSearchPanel
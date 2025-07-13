import React from 'react'
import { Link } from 'react-router-dom'
import uber from '../assets/images/uber_cap.png'
import map from '../assets/images/map3.png'
import { useGSAP } from '@gsap/react'
import { useState, useRef } from 'react'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'

const CaptainRiding = () => {

const [finishRidePanel, setfinishRidePanel] = useState(false)
const finishRidePanelRef  = useRef(null)
  useGSAP(function(){
    gsap.to(finishRidePanelRef.current, {
      y: finishRidePanel ? 0 : '100%',
      duration: 0.5,
      ease: 'power1.out'
    });
  }, [finishRidePanel]);





  return (
    <div className='h-screen relative'>
        
    <div className='fixed p-4 mt-0 flex items-center justify-between w-screen '>
    <Link to='/captain-home' className=' border-black border-[1.5px] border-solid h-10 w-10 bg-white flex items-center justify-center self-center rounded-full'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
      <img className='h-14' src={uber} alt="" />
    
    </div>
    <div className='h-4/5 '>
        <img className="h-full  w-full object-cover"src={map} alt="" />
    </div>
    <div  onClick={()=>{
setfinishRidePanel(true)
}}
className='h-1/5 p-2 flex relative items-center justify-around bg-yellow-500 '>
    <h5 
               className='p-3 text-center absolute w-[95%] top-0'
              
               ><i className="text-3xl text-gray-500 ri-arrow-up-wide-line"></i></h5>
<h4 className='text-xl form-semibold'>4 KM away</h4>
<button className='  bg-green-600  text-white px-4 font-semibold p-3
rounded-xl  '> Complete Ride</button>
    </div>
    <div ref={finishRidePanelRef} className='fixed h-screen z-10 translate-y-full bg-white bottom-0  px-3 py-6 pt-12 w-full '>
         <FinishRide setfinishRidePanel={setfinishRidePanel} />  
      </div>
    


</div>
  )
}

export default CaptainRiding
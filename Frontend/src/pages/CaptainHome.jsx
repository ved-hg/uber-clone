import React, { useState, useRef } from 'react'
import map from '../assets/images/map3.png'
import car from '../assets/images/car2.webp'
import uber from '../assets/images/uber_cap.png'
import driver from '../assets/images/driver.jpg'
import {Link, useNavigate} from 'react-router-dom'
import { CaptainDetails } from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useEffect, useContext } from 'react'

import { CaptainDataContext } from '../context/Captaincontext'
const CaptainHome = () => {
const [ridePopupPanel, setridePopupPanel] = useState(true)
const [confirmRidePopupPanel, setconfirmRidePopupPanel] = useState(false)



const ridePopupPanelRef = useRef(null)
const confirmRidePopupPanelRef = useRef(null)

const { captain } = useContext(CaptainDataContext)


useGSAP(function(){
  gsap.to(confirmRidePopupPanelRef.current, {
    y: confirmRidePopupPanel ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [confirmRidePopupPanel]);




useGSAP(function(){
  gsap.to(ridePopupPanelRef.current, {
    y: ridePopupPanel ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [ridePopupPanel]);



  return (
    <div className='h-screen'>
    <div className='fixed p-4 mt-0 flex items-center justify-between w-screen '>
    <Link to='/captain-home' className=' border-black border-[1.5px] border-solid h-10 w-10 bg-white flex items-center justify-center self-center rounded-full'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
      <img className='h-14' src={uber} alt="" />
    
    </div>
    <div className='3/5 '>
        <img className="h-full  w-full object-cover"src={map} alt="" />
    </div>
    <div className='h-2/5 p-6'>
<CaptainDetails/>
    </div>
    <div ref={ridePopupPanelRef} className='fixed z-10 translate-y-full bg-white bottom-0  px-3 py-6 pt-12 w-full '>
         <RidePopUp setridePopupPanel={setridePopupPanel} setconfirmRidePopupPanel={setconfirmRidePopupPanel}/>  
      </div>

      <div ref={confirmRidePopupPanelRef} className='fixed h-screen z-10 translate-y-full bg-white bottom-0  px-3 py-6 pt-12 w-full '>
         <ConfirmRidePopUp setconfirmRidePopupPanel={setconfirmRidePopupPanel} setridePopupPanel={setridePopupPanel}/>  
      </div>


</div>
  )
}

export default CaptainHome
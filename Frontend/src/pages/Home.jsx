import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import uber from '../assets/images/Uber.png'
import map from '../assets/images/map2.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

import Vehiclepanel from '../components/Vehiclepanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriving from '../components/LookingForDriving'
import WaitForDriver from '../components/WaitForDriver'
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {



  const [pickup, setPickup] = React.useState('');
  const [destination, setDestination] = React.useState('');

  const [panelOpen,setPanelOpen] = React.useState(false);

const panelRef = useRef(null)
const panelClsRef = useRef(null)
const vehiclepanelRef = useRef(null)
const conformPanelRef = useRef(null)
const vehicleFoundRef = useRef(null)
const waitingForDriverRef = useRef(null)

const [vehiclePanel, setVehiclePanel] = useState(false)
const [ConformPanel, setConformPanel] = useState(false)
const [vehicleFound, setvehicleFound] = useState(false)
const [waitingForDriver, setWaitingForDriver]=useState(false)
const [ pickupSuggestions, setPickupSuggestions ] = useState([])
const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
const [ activeField, setActiveField ] = useState(null)
const [ fare, setFare ] = useState({})
const [ vehicleType, setVehicleType ] = useState(null)
const [ ride, setRide ] = useState(null)





  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}
const handleDestinationChange = async (e) => {
  setDestination(e.target.value)
  try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: e.target.value },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      setDestinationSuggestions(response.data)
  } catch {
      // handle error
  }
}


  
useGSAP(function(){
if(panelOpen){
  gsap.to(panelRef.current,{
    height: '70%',
    padding:16,
    duration: 0.5,
    ease: 'power2'
  })
  gsap.to(panelClsRef.current,{
    opacity: 1,
    duration: 0.5,
    ease: 'power2'
  })
}
else{
  gsap.to(panelRef.current,{
    height: 0,
    padding:0,
    duration: 0.5,
    ease: 'power2'
  })
  gsap.to(panelClsRef.current,{
    opacity: 0,
    duration: 0.5,
    ease: 'power2'
  })


}
 },[panelOpen,vehiclePanel])


useGSAP(function(){
  gsap.to(vehiclepanelRef.current, {
    y: vehiclePanel ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [vehiclePanel]);

useGSAP(function(){
  gsap.to(conformPanelRef.current, {
    y: ConformPanel ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [ConformPanel]);

useGSAP(function(){
  gsap.to(vehicleFoundRef.current, {
    y: vehicleFound ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [vehicleFound]);

useGSAP(function(){
  gsap.to(waitingForDriverRef.current, {
    y: waitingForDriver ? 0 : '100%',
    duration: 0.5,
    ease: 'power1.out'
  });
}, [waitingForDriver]);














 return (
    <div className='h-screen relative overflow-hidden'>
    <img className="w-20  absolute   left-5 top-5 rounded-md   "src={uber} alt="Uber logo" />
            
            <div className='w-screen h-80%'>
              {/* image for temporary use */}
              <img className="h-full  w-full "src={map} alt="" />
            </div>
            <div className=' h-screen flex flex-col justify-end absolute top-0 w-full'>

              <div className='h-[30%]  p-5 bg-white relative'>
                <h5 ref={panelClsRef} onClick={()=>{setPanelOpen(false), setVehiclePanel(false)}}  className='absolute opacity-0 right-4 top-4 text-2xl'>
                <i className="ri-arrow-down-wide-line"></i>
                </h5>
              <h4 className='text-2xl font-bold'>Find a trip</h4>
              <form onSubmit={(e) => {submitHandler(e)}}>
                <div className='h-14 w-[3px] line absolute top-[40%] left-[8%] bg-gray-600 rounded-full'></div>
                <input className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3 mb-2' 
                onClick={()=>{setPanelOpen(true)
                  setActiveField('pickup')
                }}
                value={pickup}
                onChange={(e) => {setPickup(e.target.value)
                  {handlePickupChange}
                }}
                type="text" placeholder="Add a pickup location" />
                <input className='bg-[#eee] px-8 py-2 text-base rounded-lg w-full' 
                onClick={() => {
                  setPanelOpen(true)
                  setActiveField('destination')
              }}
                value={destination}
                onChange={(e) => {setDestination(e.target.value)
                  {handleDestinationChange}
                }}
                type="text" placeholder="Enter your destination" />
               
              </form>
              <button
                        
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                    </button>
              </div>
              <div ref ={panelRef} className='h-0 bg-white  '>
              <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
              </div>
            </div>
            <div ref={vehiclepanelRef} className='fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-10 w-full '>
            <Vehiclepanel setConformPanel={setConformPanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={conformPanelRef} className='fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12 w-full '>
            <ConfirmedRide setConformPanel={setConformPanel} setvehicleFound={setvehicleFound} setVehiclePanel={setVehiclePanel} />
      </div>
      <div  ref={vehicleFoundRef} className='fixed z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12 w-full '>
           <LookingForDriving setConformPanel={setConformPanel} setVehiclePanel={setVehiclePanel}  setvehicleFound={setvehicleFound}/>
      </div>

      <div  ref={waitingForDriverRef} className='fixed z-10 bg-white bottom-0  px-3 py-6 pt-12 w-full '>
           <WaitForDriver setWaitingForDriver={setWaitingForDriver} setConformPanel={setConformPanel} />
      </div>

    </div>
  )
}

export default Home
import React from 'react'
import {Link} from 'react-router-dom'
import uber from '../assets/images/image.png'
import light from '../assets/images/light.jpg'
const Start = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${light})`}} className='bg-cover bg-bottom h-screen w-full pt-8  flex justify-between flex-col'>
        <img className="w-20 ml-8 rounded-md  bg-white "src={uber} alt="Uber logo" />
            <div className='bg-white px-6 py-6 pb-7'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                {/* link is used for routing and flex +items&justify center used to make it look proper */}
            </div>
        </div>

    </div>
  )
}

export default Start
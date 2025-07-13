import React from 'react'
import { CaptainDataContext } from '../context/Captaincontext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const CaptainProtectedWrapper = ({children}) => {
    const navigate = useNavigate()
const token = localStorage.getItem('token')

const {captain,setCaptain} = React.useContext(CaptainDataContext);
const [isLoading, setIsLoading] = React.useState(true);
// if user or user email does not exist
useEffect(() => {
    if (!token) {
      // If no user is logged in, navigate to the login page
      navigate('/captain-login');
      return;
    }
  
  
  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if(response.status === 200) {
      setCaptain(response.data.captain);
      setIsLoading(false);
    }
   
    
  }).catch((error) => {
    console.error('Error:', error.message);
    localStorage.removeItem('token');
    navigate('/capatin-login');
  });

},[ navigate, setCaptain]);
    
if (isLoading) {
    return <h1>Loading...</h1>;
  }


  return (
    <>{children}</>
  )
}

export default CaptainProtectedWrapper
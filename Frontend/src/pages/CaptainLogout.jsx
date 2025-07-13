import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'




const CaptainLogout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const token = localStorage.getItem('token');
     
      if (token) {
        // Make the logout API call
        axios
          .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              // Logout successful, remove the token and redirect
              console.log('Logout successful');
              localStorage.removeItem('token');
              navigate('/login');
            }
          })
          .catch((error) => {
            console.error('Error during logout:', error);
            // Handle error (e.g., token invalid, server issue)
            
          });
      } else {
        // No token found, redirect to login directly
        console.log('No token found, redirecting to login');
        navigate('/login');
      }
    }, []);
  return (
    <></>
  )
}

export default CaptainLogout
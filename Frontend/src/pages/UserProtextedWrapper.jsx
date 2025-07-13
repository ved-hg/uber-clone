import React from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const UserProtextedWrapper = ({children}) => {
    const navigate = useNavigate()
const token = localStorage.getItem('token')
const [user ,setuser] = React.useContext(UserDataContext);
const [isLoading, setIsLoading] = React.useState(true);
// if user or user email does not exist
useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
      navigate('/login'); // Redirect to login if no token
      return;
  }

  const fetchUserProfile = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
              headers: { // Corrected `headers` key
                  Authorization: `Bearer ${token}`,
              },
          });

          if (response.status === 200) {
              setuser(response.data.user);
              setIsLoading(false);
          }
      } catch (error) {
          console.error('Error fetching user profile:', error.message);
          navigate('/login'); // Redirect to login on error
      }
  };

  fetchUserProfile();
}, [navigate, setuser]);


if(isLoading) {
  return <h1>Loading...</h1>
}

  return (
    <>{children}</>
  )
}

export default UserProtextedWrapper
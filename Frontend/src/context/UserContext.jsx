import React from 'react'


export const UserDataContext = React.createContext();


// wrap around app and Browser router in main.jsx
const UserContext = ({children}) => {


const [user ,setuser] = React.useState({
    email:'',
    fullname:{
        firstname:'',
        lastname:''}
    })

  return (
    <div>
       <UserDataContext.Provider value={[user,setuser]}> {children}
        </UserDataContext.Provider>
        </div>
  )
}

export default UserContext
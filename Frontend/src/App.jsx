import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CaptainLogin from './pages/CaptainLogin';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import UserProtextedWrapper from './pages/UserProtextedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';
export const App = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<Start />} />
<Route path="/login" element={<UserLogin />} />
<Route path="/signup" element={<UserSignup />} />
<Route path="/captain-login" element={<CaptainLogin />} />
<Route path="/captain-signup" element={<CaptainSignup />} />
<Route path="/home" element={
  <UserProtextedWrapper><Home /></UserProtextedWrapper>} />
  <Route path="/users/logout" 
  element={<UserProtextedWrapper><UserLogout /></UserProtextedWrapper>}  />
     
     <Route path="/captain-home" element={<CaptainProtectedWrapper>
      <CaptainHome />
     </CaptainProtectedWrapper>} /> 
     <Route path="/captains/logout" 
  element={<CaptainProtectedWrapper><CaptainLogout /></CaptainProtectedWrapper>}  />


<Route path="/riding" element={<Riding />} />
<Route path="/captain-riding" element={<CaptainRiding />} />
      </Routes>
      



    </div>
  )
}
export default App;
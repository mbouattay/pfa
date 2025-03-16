import { useState } from 'react'
import Login from './pages/login/login'
import Register from './pages/register/register'
import VerifierEmail from './pages/verifier_Email/verifierEmail'
import ResetPassword from './pages/reset-password/reset-password'
import PasswordUpdated from './pages/password-updated/password-updated'
import Dashboard from './pages/dashboard/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accueil from './pages/accueil/accueil'
import Inscrit from './pages/Inscrit/Inscrit'
import CourseDetails from './pages/mesCourse/mesCourse'
import Test from './pages/test/test'
import Profile from './pages/Profile/Profile'
import Agenda from './pages/Agenda/Agenda'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/' element={<Accueil />} />
            <Route path='/inscrit' element={<Inscrit />} />
            <Route path='/mecCourse'  element={<CourseDetails/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/agenda' element={<Agenda/>}/>
          </Route>
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verifierEmail' element={<VerifierEmail />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/passwordUpdated' element={<PasswordUpdated />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

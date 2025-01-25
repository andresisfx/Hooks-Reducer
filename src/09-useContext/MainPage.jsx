import React from 'react'
import { Routes, Route , Link} from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainPage = () => {
  return (
   <UserProvider>
    
    <h1>MainPage</h1>
    <hr />
    <NavBar/>

    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="login" element={<LoginPage/>} />

        <Route path="/*" element={<LoginPage/>} />
    </Routes>

    
   </UserProvider>
  )
}

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#">useContext</Link>
           
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={({isActive})=> `nav-link ${isActive ? 'active' : ''}` }
                            
                     
                        
                        to="/about">
                        About
                    </NavLink>
                    <NavLink
                        className={({isActive})=> `nav-link ${isActive ? 'active' : ''}` }
                        to="/login">
                        Login
                    </NavLink>
                   
                </ul>
            </div>
        </div>
    </nav>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark menu">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" >Dino Trumps</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/game" className='nav-link' >
                                Play Game
                    </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/howTo" className='nav-link' >
                                How To Play
                    </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

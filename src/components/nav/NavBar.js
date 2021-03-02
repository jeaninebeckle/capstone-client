import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './NavBar.scss'
// import Logo from "./r-logo.jpg"

export const NavBar = () => {
    const history = useHistory()
    

    return (
        <ul className="navbar">
            <li className="navbar__item">
                {/* <img alt="Rare Logo" className="navbar__logo" src={Logo} /> */}
                <h1 style={{ textAlign: "center", fontSize: "2em", marginTop: "0" }}>It Takes A Village</h1>
            </li>
            <li className="navbar__item">
                <NavLink className="navbar__link" to="/">Home</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink className="navbar__link" to="/resources">Resources</NavLink>
            </li>
            {
                (localStorage.getItem("journey_token") !==null) ? 
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/tutoring-signup">Tutoring Signup</NavLink>
                    </li> :
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/login">Tutoring Signup</NavLink>
                    </li>
            }
            {
                (localStorage.getItem("journey_token") !==null) ? 
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/profile">Profile</NavLink>
                    </li> :
                    ""
            }
            {
                (localStorage.getItem("journey_token") !== null) ?
                    <li className="navbar__item">
                        <button className="navbar__link logout"
                            onClick={() => {
                                localStorage.removeItem("journey_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    ""
            }        
            </ul>
    )
}

import { React, useContext, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { UserContext } from '../Users/UserProvider'
import './NavBar.scss'

export const NavBar = () => {
    const history = useHistory()
    
    const { users, getUserById } = useContext(UserContext)

    const userId = parseInt(localStorage.getItem("journey_user_id"))

    useEffect(() => {
        getUserById(userId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img alt="LMV Logo" className="navbar__logo" src="crop-logo.jpeg" />
                {/* <h1 style={{ textAlign: "center", fontSize: "2em", marginTop: "0" }}>It Takes A Village</h1> */}
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
                (users.is_staff === true) ? 
                    <li className="navbar__item">
                        <NavLink className="navbar__link" to="/all-users">All Users</NavLink>
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
                                window.location.reload()
                            }}
                        >Logout</button>
                    </li> :
                    <button className="navbar__item">
                        <NavLink className="navbar__link" to="/tutoring-signup">Login</NavLink>
                    </button>
            }        
            </ul>
    )
}

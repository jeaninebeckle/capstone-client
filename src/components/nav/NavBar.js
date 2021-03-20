import { React, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap';
import { UserContext } from '../Users/UserProvider'

import './NavBar.scss'

export const NavBar = (p) => {
    const history = useHistory()
    
    const { users, getUserById } = useContext(UserContext)

    const userId = parseInt(localStorage.getItem("journey_user_id"))

    useEffect(() => {
        getUserById(userId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (

    <Navbar collapseOnSelect expand="lg">

      <Navbar.Brand href="/">
      <img
        src="/crop-logo.jpeg"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ml-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/resources">Resources</Nav.Link>
        {
            (localStorage.getItem("journey_token") !==null) ? 
                <Nav.Link href="/tutoring-signup">Tutoring Signup</Nav.Link> :                
                <Nav.Link href="/login">Tutoring Signup</Nav.Link>            
        }
        {
            (localStorage.getItem("journey_token") !==null) ? 
                    <Nav.Link href="/profile">Profile</Nav.Link> : ""
        }
        {
            (users.is_staff === true) ? 
                <Nav.Link href="/all-users">All Users</Nav.Link> : ""
        }
         {
            (localStorage.getItem("journey_token") !== null) ?                  
                <button className="navbar__link logout-button"
                    onClick={() => {
                        localStorage.removeItem("journey_token")
                        history.push({ pathname: "/" })
                        window.location.reload()
                    }}>Logout</button> :
                <button className="logout-button">
                        <Nav.Link href="/tutoring-signup">Login</Nav.Link>
                </button>
           } 
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    )
}

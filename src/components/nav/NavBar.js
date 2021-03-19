import { React, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap';
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

    <Navbar collapseOnSelect expand="lg" >
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
                <button className="navbar__link logout"
                    onClick={() => {
                        localStorage.removeItem("journey_token")
                        history.push({ pathname: "/" })
                        window.location.reload()
                    }}>Logout</button> :
                <button>
                        <Nav.Link href="/tutoring-signup">Login</Nav.Link>
                </button>
           } 
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
        // <ul className="navbar">
        //     <li className="navbar__item">
        //         <img alt="LMV Logo" className="navbar__logo" src="crop-logo.jpeg" />
        //         {/* <h1 style={{ textAlign: "center", fontSize: "2em", marginTop: "0" }}>It Takes A Village</h1> */}
        //     </li>
        //     <li className="navbar__item">
        //         <NavLink className="navbar__link" to="/">Home</NavLink>
        //     </li>
        //     <li className="navbar__item">
        //         <NavLink className="navbar__link" to="/resources">Resources</NavLink>
        //     </li>
            // {
            //     (localStorage.getItem("journey_token") !==null) ? 
            //         <li className="navbar__item">
            //             <NavLink className="navbar__link" to="/tutoring-signup">Tutoring Signup</NavLink>
            //         </li> :
            //         <li className="navbar__item">
            //             <NavLink className="navbar__link" to="/login">Tutoring Signup</NavLink>
            //         </li>
            // }
            // {
            //     (localStorage.getItem("journey_token") !==null) ? 
            //         <li className="navbar__item">
            //             <NavLink className="navbar__link" to="/profile">Profile</NavLink>
            //         </li> :
            //         ""
            // }
            // {
            //     (users.is_staff === true) ? 
            //         <li className="navbar__item">
            //             <NavLink className="navbar__link" to="/all-users">All Users</NavLink>
            //         </li> :
            //         ""
            // }
        //     {
        //         (localStorage.getItem("journey_token") !== null) ?
        //             <li className="navbar__item">
        //                 <button className="navbar__link logout"
        //                     onClick={() => {
        //                         localStorage.removeItem("journey_token")
        //                         history.push({ pathname: "/" })
        //                         window.location.reload()
        //                     }}
        //                 >Logout</button>
        //             </li> :
        //             <button className="navbar__item">
        //                 <NavLink className="navbar__link" to="/tutoring-signup">Login</NavLink>
        //             </button>
        //     }        
        //     </ul>
    )
}

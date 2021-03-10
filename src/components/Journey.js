import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserProvider } from "./Users/UserProvider"

export const Journey = () => (
  <>
    <Route render={() => {
            return (
                <>
                <UserProvider>
                    <Route render={props => <NavBar {...props} />} />
                </UserProvider>
                <Route render={props => <ApplicationViews {...props} />} />
                </>
            )
    }} />

    <Route path="/login" render={props => <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props} />} />
  </>

)

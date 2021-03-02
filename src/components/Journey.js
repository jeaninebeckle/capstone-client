import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const Journey = () => (
  <>
    <Route render={() => {
            return (
                <>
                    <Route render={props => <NavBar {...props} />} />
                    <Route render={props => <ApplicationViews {...props} />} />
                </>
            )
    }} />

    <Route path="/login" render={props => <Login {...props} />} />
    <Route path="/register" render={props => <Register {...props} />} />
  </>

)

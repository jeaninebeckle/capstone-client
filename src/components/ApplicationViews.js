import React from "react"
import { Route, Redirect } from "react-router-dom"
import { AnnouncementList } from "./Announcements/AnnouncementList"
import { AnnouncementProvider } from "./Announcements/AnnouncementProvider"
import { ProfileList } from "./Profile/ProfileList"
import { ResourceList } from "./Resources/ResourceList"
import { Calendar } from "./Signup/Calendar"


export const ApplicationViews = () => {
  return (
    <>
        <Route exact path="/resources" render={(props) => {
            return <ResourceList history={props.history} />
        }} />
        <AnnouncementProvider>
          <Route exact path="/" render={(props) => {
              return <AnnouncementList history={props.history} />
          }} />
        </AnnouncementProvider>

        <Route exact path="/profile" render={(props) => {
            if (localStorage.getItem("journey_token")) {
              return <ProfileList history={props.history} />
            } else {
              return <Redirect to="/" />
            }
            
        }} />

        <Route exact path="/tutoring-signup" render={(props) => {
          if (localStorage.getItem("journey_token")) {
            return <Calendar history={props.history} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
    </>
  )
}

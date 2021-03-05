import React from "react"
import { Route, Redirect } from "react-router-dom"
import { AnnouncementList } from "./Announcements/AnnouncementList"
import { AnnouncementProvider } from "./Announcements/AnnouncementProvider"
import { AnnouncementForm } from "./Announcements/NewAnnouncement"
import { ProfileList } from "./Profile/ProfileList"
import { ResourceList } from "./Resources/ResourceList"
import { ResourceProvider } from "./Resources/ResourceProvider"
import { Calendar } from "./Signup/Calendar"
import { JourneyUserProvider } from "./Users/JourneyUserProvider"
import { UserProvider } from "./Users/UserProvider"



export const ApplicationViews = () => {
  return (
    <>
      <ResourceProvider>
        <Route exact path="/resources" render={(props) => {
            return <ResourceList history={props.history} />
        }} />
      </ResourceProvider>
      
      <UserProvider>
        <JourneyUserProvider>
          <AnnouncementProvider>
            <Route exact path="/" render={(props) => {
                return <AnnouncementList history={props.history} />
            }} />
            <Route exact path="/new-announcement" render={(props) => {
                if (localStorage.getItem("journey_token")){
                return <AnnouncementForm history={props.history} />
                } else {
                  return <Redirect to="/" />
                }
            }} />
            <Route exact path="/profile" render={(props) => {
                if (localStorage.getItem("journey_token")) {
                  return <ProfileList history={props.history} />
                } else {
                  return <Redirect to="/" />
                }
                
            }} />
          </AnnouncementProvider>
        </JourneyUserProvider>
      </UserProvider>



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

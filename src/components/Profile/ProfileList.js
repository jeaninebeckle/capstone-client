import React, { useContext, useEffect } from "react"
import { JourneyUserContext } from "../Users/JourneyUserProvider"
import { UserContext } from "../Users/UserProvider"
import moment from "moment"



export const ProfileList = () => {

  const { users, getUserById } = useContext(UserContext)
  const { journeyusers, getJourneyUserById } = useContext(JourneyUserContext)

  const userId = parseInt(localStorage.getItem("journey_user_id"))


  useEffect(() => {
    getUserById(userId)
    getJourneyUserById(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Welcome, {users.first_name}!</h1>
        <h3>Profile Information</h3>
          <p>Full name: {users.first_name} {users.last_name}</p>
          <p>Status: {users.is_staff === true? "Staff" : "Volunteer"}</p>
          <p>Email address: {users.email}</p>
          <p>Display name: {journeyusers.display_name}</p>
          <p>Member since: {moment(users.date_joined).format('MM/DD/YYYY')}</p>
    </div>
  )
}

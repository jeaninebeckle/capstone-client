import React, { useContext, useEffect } from "react"
import { JourneyUserContext } from "../Users/JourneyUserProvider"
import { UserContext } from "../Users/UserProvider"
import { SubjectContext } from "../Subjects/SubjectProvider"
import moment from "moment"
import "./ProfileList.scss"


export const ProfileList = () => {

  const { users, getUserById } = useContext(UserContext)
  const { journeyusers, getJourneyUserById } = useContext(JourneyUserContext)
  const { subjects, getSubjects } = useContext(SubjectContext)

  const userId = parseInt(localStorage.getItem("journey_user_id"))


  useEffect(() => {
    getUserById(userId)
    getJourneyUserById(userId)
    getSubjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        <h1>Welcome, {users.first_name}!</h1>
          <h3 className="profile">Profile Information</h3>
            <p>Full name: {users.first_name} {users.last_name}</p>
            <p>Status: {users.is_staff === true? "Staff" : "Volunteer"}</p>
            <p>Email address: {users.email}</p>
            <p>Display name: {journeyusers.display_name}</p>
            <p>Member since: {moment(users.date_joined).format('MM/DD/YYYY')}</p>
      </div>
      <div>
        <h3 className="profile">Tutoring Subjects</h3>
        <h5>Check the box next to each subject that you feel comfortable tutoring.</h5>
          <div className="subjects">
              {
                subjects.map(subject => {
                  return <section className="subject" key={subject.id}>
                            <input type="checkbox" id={subject.id} name="subject" className="subject-checkbox" value={subject.label} />
                            <label htmlFor="subject">{subject.label}</label>
                        </section>
                })
              }
            </div>
      </div>
    </>
  )
}

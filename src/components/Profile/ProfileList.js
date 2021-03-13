import React, { useContext, useEffect, useState } from "react"
import { JourneyUserContext } from "../Users/JourneyUserProvider"
import { UserContext } from "../Users/UserProvider"
import { SubjectContext } from "../Subjects/SubjectProvider"
import moment from "moment"
import "./ProfileList.scss"


export const ProfileList = () => {

  const { users, getUserById } = useContext(UserContext)
  const { journeyusers, getJourneyUserById, updateJourneyUser } = useContext(JourneyUserContext)
  const { subjects, getSubjects } = useContext(SubjectContext)

  const [ journeyUser, setJourneyUsers ] = useState({})

  const userId = parseInt(localStorage.getItem("journey_user_id"))


  useEffect(() => {
    getUserById(userId)
    getJourneyUserById(userId)
    getSubjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateUserSubjects = (e) => {
    //updateJourneyUser function
  }

  //when the user clicks the update button updateUser function happen
  //this function will incorporate updateJourne

//onChange? need to use the updateJourneyUser function whenever a box is checked or unchecked
//checking box adds the subject to the user, unchecking removes it
//how much does this code relate to what my react code will be once I change it to dropdowns for yes/no/maybe?
//should I just skip the checkboxes and go straight to dropdowns?
//do I need to get the whole user in state and modify a copy with the subjects?
//A regular list of the checkboxes is displaying on the page. I want boxes to be checked on page load based on the database
//Update button - UI

  return (
    <>
      <div className="page-div">
        <h1>Welcome, {users.first_name}!</h1>
          <h3 className="profile">Profile Information</h3>
          <div className="profile-details">
            <p>Full name: {users.first_name} {users.last_name}</p>
            <p>Status: {users.is_staff === true? "Staff" : "Volunteer"}</p>
            <p>Email address: {users.email}</p>
            <p>Display name: {journeyusers.display_name}</p>
            <p>Member since: {moment(users.date_joined).format('MM/DD/YYYY')}</p>
          </div>
      </div>
      <div className="subjects-div">
        <h3 className="profile">Tutoring Subjects</h3>
        <h5>Check the box next to each subject that you would be willing to tutor. If you are only somewhat comfortable with a subject, but would be willing to try helping a student if asked, please mark those subjects as well. Click the Update Changes button to save.</h5>
          <div className="subjects-detail">
              {
                subjects.map(subject => {
                  return <section className="subject" key={subject.id}>
                            <input type="checkbox" id={subject.id} name="subject" className="subject-checkbox" value={subject.label} />
                            <label htmlFor="subject">{subject.label}</label>
                        </section>
                })
              }
            </div>
            <button className="update-changes">Update Changes</button>
      </div>
    </>
  )
}

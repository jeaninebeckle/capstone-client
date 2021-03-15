import React, { useContext, useEffect, useState } from "react"
import { JourneyUserContext } from "../Users/JourneyUserProvider"
import { UserContext } from "../Users/UserProvider"
import { SubjectContext } from "../Subjects/SubjectProvider"
import moment from "moment"
import "./ProfileList.scss"


export const ProfileList = () => {

  const { users, getUserById } = useContext(UserContext)
  const { journeyusers, getJourneyUserById, updateJourneyUser, setJourneyUsers } = useContext(JourneyUserContext)
  const { subjects, getSubjects } = useContext(SubjectContext)

  // const [ journeyUser, setJourneyUsers ] = useState({})

  const userId = parseInt(localStorage.getItem("journey_user_id"))


  useEffect(() => {
    getUserById(userId)
    getJourneyUserById(userId)
    getSubjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleControlledInputChange = (e) => {
    const newJourneyUser = Object.assign({}, journeyusers)
    if(e.target.checked === true) {
      newJourneyUser[e.target.name].push(parseInt(e.target.id))
    } else {
      if(e.target.checked === false) {
        for (let i = 0; i < newJourneyUser.subjects.length; i++) {
          if (newJourneyUser.subjects[i] === parseInt(e.target.id)) {
            newJourneyUser.subjects.splice(i, 1);
          }
        }
      }
    }
    console.log("this is my newJourneyUser", newJourneyUser.subjects)

    setJourneyUsers(newJourneyUser)
  }


  const getUserToEdit = () => {
    const selectedUser = journeyusers || {}
    console.log("selected user", journeyusers)
    setJourneyUsers(selectedUser)
  }

  useEffect(() => {
    getUserToEdit()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [journeyusers])

  const newJourneyUser = () => {
    console.log(journeyusers.id)
    updateJourneyUser({
      id: journeyusers.id,
      subjects: journeyusers.subjects
    }) 
    .then(() => window.location.reload())
  }


  const existingSubjects = subjects.filter(subject => subject.id === journeyusers.subjects)


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
                      <input onChange={handleControlledInputChange} 
                            type="checkbox" 
                            id={subject.id} 
                            name="subjects" 
                            className="subject-checkbox" 
                            value={subject.label}
                            // defaultChecked={user.subject.id === subject.id ? true : ""}
                            />
                            <label htmlFor="subjects">{subject.label}</label>
                            </section>
                })     
              }
              
            </div>
            <button className="update-changes" type="submit"
              onClick={e => {
                e.preventDefault()
                newJourneyUser()
              }}>Update Changes</button>
      </div>
    </>
  )
}

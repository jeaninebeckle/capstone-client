import React, { useContext, useEffect } from "react"
import { UserContext } from "../Users/UserProvider"
import { AnnouncementContext } from "./AnnouncementProvider"
import moment from "moment"
import "./AnnouncementList.scss"


export const AnnouncementList = ({ history }) => {
  const { announcements, getAnnouncements, deleteAnnouncement } = useContext(AnnouncementContext)
  const { users, getUserById } = useContext(UserContext)

  const userId = parseInt(localStorage.getItem("journey_user_id"))

  useEffect(() => {
    getAnnouncements()
    getUserById(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>

      <div style={{ margin: "0rem 3rem" }}>
        <div className="intro">
          <h1>It Takes A Village</h1>
          <h3>An online toolkit for Legacy Mission Village's Journey program volunteers</h3>
              <h2>Announcements</h2>
              <div className="announcements">
                {
                  announcements.map(announcement => {
                    return <section className="announcement" key={announcement.id}>
                              <p>{announcement.content} {users.is_staff===true ? <i className="fas fa-trash-alt" onClick={() => window.confirm('Are you sure?') &&
                                  deleteAnnouncement(announcement.id).then(() => history.push("/"))
                                  }></i> : ""} </p>
                              <p className="footer">Posted on {moment(announcement.date).format('MM/DD/YYYY')} </p>
                              <hr></hr>
                          </section>
                  })
                }
              </div>
        {users.is_staff===true ? <button onClick={() => history.push("/new-announcement")}>New announcement</button> : "" }   
        </div>
        <div>
          <p className="journey-descrip">Legacy Mission Village's Journey After School Program seeks to provide academic, social and cultural support to newly-arrived refugee high school students. Many refugee high school students arrive in the United States with limited or interrupted schooling due to their refugee journeys.<br></br><br></br>
            In our Journey After School Program, students come to us every week not only for homework help, but for assistance navigating the college application process from filling out the FAFSA form to ACT prep and College tours. We also work to provide opportunities for students to experience cultural activities and the arts.</p>
            <br></br>
            <button className="volunteer"><a href="http://www.legacymissionvillage.org/getinolved" target="blank">Volunteer with Legacy Mission Village</a></button>
        </div>
      </div>
    </>
  )
}

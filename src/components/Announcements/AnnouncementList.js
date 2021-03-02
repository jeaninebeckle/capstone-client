import moment from "moment"
import React, { useContext, useEffect } from "react"
import "./AnnouncementList.scss"
import { AnnouncementContext } from "./AnnouncementProvider"

export const AnnouncementList = () => {
  const { announcements, getAnnouncements } = useContext(AnnouncementContext)

  useEffect(() => {
    getAnnouncements()
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
                              <p>{announcement.content}</p>
                              <p>Posted on {moment(announcement.date).format('MM/DD/YYYY')} </p>
                          </section>
                  })
                }
              </div>
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

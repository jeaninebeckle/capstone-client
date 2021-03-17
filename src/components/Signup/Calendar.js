import React, { useContext, useEffect } from "react"
import { CalContext } from "./CalendarProvider"
import { UserContext } from "../Users/UserProvider"
import "./Calendar.scss"


export const Calendar = ({history}) => {

  const { calTexts, getCalText } = useContext(CalContext)
  const { users, getUserById } = useContext(UserContext)

  const userId = parseInt(localStorage.getItem("journey_user_id"))

  useEffect(() => {
    getCalText()
    getUserById(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <h1>Calendar</h1>
    <div className="cal-page">
    <div className="scripts-button">{users.is_staff === true ? <button className="scripts"><a href="https://docs.google.com/spreadsheets/d/1oYpy_R5FkckHzmVnRl_QKEBfa-wfx_MWe4sBnFwA48A/edit?usp=sharing" target="blank">Export Calendar Data</a></button> : ""}</div>
      <div className="calendar-info">
        {
          calTexts.map(calText => {
            return <section className="info-text" key={calText.id}>
                    <p>{calText.content}</p>
                </section>            
          })
        }<i className="far fa-edit fa-lg" onClick={() => history.push("/update-text")}></i></div>
      <p>Please track your volunteer hours <a className="hours" href="https://www.cognitoforms.com/LMV1/VolunteerHours" target="blank">here</a> at least once a month.</p>
      <p>If the calendar on the page isn't displaying, you can view tutoring slots <a className="google-cal" href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" target="blank">here</a>.</p>
      <div className="iframe"><iframe title="calendar" src="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" height="600" width="900"></iframe></div>
    </div>
    </>
  )
}

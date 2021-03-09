import React, { useContext, useEffect } from "react"
import { CalContext } from "./CalendarProvider"
import "./Calendar.scss"


export const Calendar = ({history}) => {

  const { calTexts, getCalText } = useContext(CalContext)

  useEffect(() => {
    getCalText()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <h1>Calendar</h1>
    <div>
      <div className="calendar-info">
        {
          calTexts.map(calText => {
            return <section className="info-text" key={calText.id}>
                    <p>{calText.content}</p>
                </section>            
          })
        }<i className="far fa-edit fa-lg" onClick={() => history.push("/update-text")}></i></div>
      <p>If the calendar on the page isn't displaying, you can view tutoring slots <a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" target="blank">here</a></p>
      <iframe title="calendar" src="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" height="600" width="800"></iframe>
    </div>
    </>
  )
}

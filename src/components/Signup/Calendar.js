import React from "react"
import "./Calendar.scss"

export const Calendar = () => {
  return (
    <>
    <h1>Calendar</h1>
    <div>
      <div className="calendar-info"><p>Placeholder text that we can change later and that LMV staff will have the ability to edit</p><i className="far fa-edit fa-lg"></i></div>
      <p>If the calendar on the page isn't displaying, you can view tutoring slots <a href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" target="blank">here</a></p>
      <iframe title="calendar" src="https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU9NdExVa29Ya24zfGRlZmF1bHR8MDVkZDBkMTQ4NDhlNDYzMDA5NWE1YmNmOWRiYmYyMjA" height="600" width="800"></iframe>
    </div>
    </>
  )
}

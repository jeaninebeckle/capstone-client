import React, { useState } from "react"

export const AnnouncementContext = React.createContext()

export const AnnouncementProvider = (props) => {
  const [announcements, setAnnouncements] = useState([])

  const getAnnouncements = () => {
    return fetch("http://localhost:8000/announcements")
        .then(res => res.json())
        .then(setAnnouncements)
  }

  return (
    <AnnouncementContext.Provider value={{
        announcements, getAnnouncements
    }}>
        {props.children}
    </AnnouncementContext.Provider>
)
}

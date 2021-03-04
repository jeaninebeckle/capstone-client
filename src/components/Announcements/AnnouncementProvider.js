import React, { useState } from "react"

export const AnnouncementContext = React.createContext()

export const AnnouncementProvider = (props) => {
  const [announcements, setAnnouncements] = useState([])

  const getAnnouncements = () => {
    return fetch("http://localhost:8000/announcements")
        .then(res => res.json())
        .then(setAnnouncements)
  }

  const addAnnouncement = newAnnouncement => {
    return fetch("http://localhost:8000/announcements", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        },
        body: JSON.stringify(newAnnouncement)
    })
        .then(getAnnouncements)
  }

  const deleteAnnouncement = (announcementId) => {
    return fetch(`http://localhost:8000/announcements/${announcementId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        }            
    })
        .then(getAnnouncements)
}

  return (
    <AnnouncementContext.Provider value={{
        announcements, getAnnouncements, addAnnouncement, deleteAnnouncement
    }}>
        {props.children}
    </AnnouncementContext.Provider>
)
}

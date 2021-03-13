import React, { useState } from "react"

export const JourneyUserContext = React.createContext()


export const JourneyUserProvider = (props) => {
    const [journeyusers, setJourneyUsers] = useState([])

    const getJourneyUsers = () => {
        return fetch("http://localhost:8000/journeyusers", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("journey_token")}`
            }  
        })
            .then(res => res.json())
            .then(setJourneyUsers)
    }

    const getJourneyUserById = (userId) => {
      return fetch(`http://localhost:8000/journeyusers/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("journey_token")}`
        }
      })
        .then(res => res.json())
        .then(setJourneyUsers)    
    }

    const updateJourneyUser = (updatedUser, userId) => {
      return fetch(`http://localhost:8000/journeyusers/${userId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${localStorage.getItem("journey_token")}`
          },
          body: JSON.stringify(updatedUser)
      })
          .then(getJourneyUsers)
  }

    return (
      <JourneyUserContext.Provider value={{
          journeyusers, getJourneyUsers, getJourneyUserById, updateJourneyUser
      }}>
          {props.children}
      </JourneyUserContext.Provider>
  )
}

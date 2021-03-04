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

    return (
      <JourneyUserContext.Provider value={{
          journeyusers, getJourneyUsers, getJourneyUserById
      }}>
          {props.children}
      </JourneyUserContext.Provider>
  )
}

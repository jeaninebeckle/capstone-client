import React, { useState } from "react"

export const JourneyUserContext = React.createContext()


export const JourneyUserProvider = (props) => {
    const [journeyusers, setJourneyUsers] = useState([])

    const getJourneyUsers = () => {
        return fetch("https://lmv-journey.web.app/journeyusers", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("journey_token")}`
            }  
        })
            .then(res => res.json())
            .then(setJourneyUsers)
    }

    const getJourneyUserById = (userId) => {
      return fetch(`https://lmv-journey.web.app/journeyusers/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("journey_token")}`
        }
      })
        .then(res => res.json())
        .then(setJourneyUsers)    
    }

    const updateJourneyUser = updatedUser => {
      return fetch(`https://lmv-journey.web.app/journeyusers/${updatedUser.id}`, {
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
          journeyusers, getJourneyUsers, getJourneyUserById, updateJourneyUser, setJourneyUsers
      }}>
          {props.children}
      </JourneyUserContext.Provider>
  )
}

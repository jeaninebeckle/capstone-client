import React, { useState } from "react"

export const UserContext = React.createContext()


export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("https://lmv-journey.web.app/users", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("journey_token")}`
            }  
        })
            .then(res => res.json())
            .then(setUsers)
    }

    const getUserById = (userId) => {
      return fetch(`https://lmv-journey.web.app/users/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("journey_token")}`
        }
      })
        .then(res => res.json())
        .then(setUsers)    
    }

    return (
      <UserContext.Provider value={{
          users, getUsers, getUserById
      }}>
          {props.children}
      </UserContext.Provider>
  )
}

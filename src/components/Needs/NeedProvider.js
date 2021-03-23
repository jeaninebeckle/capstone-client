import React, { useState } from "react"

export const NeedContext = React.createContext()

export const NeedProvider = (props) => {
  const [needs, setNeeds] = useState([])

  const getNeeds = () => {
    return fetch("https://lmv-journey.herokuapp.com/needs")
        .then(res => res.json())
        .then(setNeeds)
  }

  const addNeed = newNeed => {
    return fetch("https://lmv-journey.herokuapp.com/needs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        },
        body: JSON.stringify(newNeed)
    })
        .then(getNeeds)
  }

  const deleteNeed = (needId) => {
    return fetch(`https://lmv-journey.herokuapp.com/needs/${needId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        }            
    })
        .then(getNeeds)
}

  const updateNeed = need => {
    return fetch(`https://lmv-journey.herokuapp.com/needs/${need.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        },
        body: JSON.stringify(need)
    })
        .then(getNeeds)
}

  return (
    <NeedContext.Provider value={{
        needs, getNeeds, addNeed, deleteNeed, updateNeed
    }}>
        {props.children}
    </NeedContext.Provider>
)
}

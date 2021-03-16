import React, { useState } from "react"


export const ResourceContext = React.createContext()

export const ResourceProvider = (props) => {
  const [resources, setResources] = useState([])

  const getResources = () => {
    return fetch("http://localhost:8000/resources")
        .then(res => res.json())
        .then(setResources)
    }

  const addResource = newResource => {
    return fetch("http://localhost:8000/resources", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        },
        body: JSON.stringify(newResource)
    })
        .then(getResources)
    }

  return (
    <ResourceContext.Provider value={{
        resources, getResources, addResource
    }}>
        {props.children}
    </ResourceContext.Provider>
    )
}

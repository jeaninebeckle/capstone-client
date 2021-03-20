import React, { useState } from "react"


export const ResourceContext = React.createContext()

export const ResourceProvider = (props) => {
  const [resources, setResources] = useState([])

  const getResources = () => {
    return fetch("https://lmv-journey.web.app/resources")
        .then(res => res.json())
        .then(setResources)
    }

  const addResource = newResource => {
    return fetch("https://lmv-journey.web.app/resources", {
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

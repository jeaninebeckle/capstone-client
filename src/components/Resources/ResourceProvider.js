import React, { useState } from "react"
import "./Resources.scss"

export const ResourceContext = React.createContext()

export const ResourceProvider = (props) => {
  const [resources, setResources] = useState([])

  const getResources = () => {
    return fetch("http://localhost:8000/resources")
        .then(res => res.json())
        .then(setResources)
  }

  return (
    <ResourceContext.Provider value={{
        resources, getResources
    }}>
        {props.children}
    </ResourceContext.Provider>
)
}

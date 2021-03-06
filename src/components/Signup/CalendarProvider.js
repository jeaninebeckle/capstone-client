import React, { useState } from "react"


export const CalContext = React.createContext()

export const CalProvider = (props) => {
  const [calText, setCalText] = useState([])

  const getCalText = () => {
    return fetch("http://localhost:8000/resources")
        .then(res => res.json())
        .then(setCalText)
  }


  return (
    <CalContext.Provider value={{
        calText, getCalText
    }}>
        {props.children}
    </CalContext.Provider>
)
}

import React, { useState } from "react"


export const CalContext = React.createContext()

export const CalProvider = (props) => {
  const [calTexts, setCalText] = useState([])

  const getCalText = () => {
    return fetch("http://localhost:8000/caltexts")
        .then(res => res.json())
        .then(setCalText)
  }


  return (
    <CalContext.Provider value={{
        calTexts, getCalText
    }}>
        {props.children}
    </CalContext.Provider>
)
}

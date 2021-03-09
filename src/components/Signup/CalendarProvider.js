import React, { useState } from "react"


export const CalContext = React.createContext()

export const CalProvider = (props) => {
  const [calTexts, setCalText] = useState([])

  const getCalText = () => {
    return fetch("http://localhost:8000/caltexts")
        .then(res => res.json())
        .then(setCalText)
  }

  const updateCalText = text => {
    return fetch(`http://localhost:8000/caltexts/${text.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("journey_token")}`
        },
        body: JSON.stringify(text)
    })
        .then(getCalText)
}


  return (
    <CalContext.Provider value={{
        calTexts, getCalText, updateCalText
    }}>
        {props.children}
    </CalContext.Provider>
)
}

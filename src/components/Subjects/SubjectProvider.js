import React, { useState } from "react"


export const SubjectContext = React.createContext()

export const SubjectProvider = (props) => {
  const [subjects, setSubjects] = useState([])

  const getSubjects = () => {
    return fetch("http://localhost:8000/subjects")
        .then(res => res.json())
        .then(setSubjects)
    }


  return (
    <SubjectContext.Provider value={{
        subjects, getSubjects
    }}>
        {props.children}
    </SubjectContext.Provider>
    )
}

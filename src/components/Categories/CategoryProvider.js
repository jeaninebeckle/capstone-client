import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    return fetch("https://lmv-journey.web.app/categories")
        .then(res => res.json())
        .then(setCategories)
  }

  return (
    <CategoryContext.Provider value={{
        categories, getCategories
    }}>
        {props.children}
    </CategoryContext.Provider>
)
}

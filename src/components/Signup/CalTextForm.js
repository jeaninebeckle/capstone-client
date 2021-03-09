import React, { useContext, useState, useEffect } from "react"
import { CalContext } from "./CalendarProvider"
import "./Calendar.scss"

export const CalTextForm = (props) => {

  const { calTexts, updateCalText, getCalText } = useContext(CalContext)

  const [ calText, setCalText ] = useState({})


  const handleControlledInputChange = (e) => {
    const newText = Object.assign({}, calText)          
    newText[e.target.name] = e.target.value    
    setCalText(newText)                                 
  }

  const getTextToEdit = () => {
      const selectedText = calTexts[0] || {}
      setCalText(selectedText)
  }

  useEffect(() => {
      getCalText()
  }, [])

  useEffect(() => {
      getTextToEdit()
  }, [calTexts])

  const newText = () => {

    updateCalText({
      id: calText.id,
      content: calText.content
    })
      .then(() => props.history.push("/tutoring-signup"))
  }

  return (
    <form className="textForm">
      <h2 className="textForm__title">Update the informational text on the calendar page</h2>
      <fieldset>
          <div className="form-group">
              <label htmlFor="content">Content: </label>
              <textarea id="wrap" name="content" required autoFocus className="form-control"
                  defaultValue={calText.content}
                  onChange={handleControlledInputChange}>
              </textarea>
          </div>
      </fieldset>
      <button type="submit"
            onClick={e => {
                e.preventDefault()
                newText()
            }}>
            Save
        </button>
    </form>
  )
}

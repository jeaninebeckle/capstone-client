import React, { useContext, useState, useEffect } from "react"
import { NeedContext } from "./NeedProvider"

export const EditNeed = (props) => {

  const { needs, updateNeed, getNeeds } = useContext(NeedContext)

  const [ need, setNeed ] = useState({})


  const handleControlledInputChange = (e) => {
    const newNeed = Object.assign({}, need)          
    newNeed[e.target.name] = e.target.value    
    setNeed(newNeed)                                 
  }

  const getNeedToEdit = () => {
      const needId = parseInt(props.match.params.needId)
      const selectedNeed = needs.find(n => n.id === needId) || {}
      setNeed(selectedNeed)
  }

  useEffect(() => {
      getNeeds()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      getNeedToEdit()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needs])

  const newNeed = () => {

    updateNeed({
      id: need.id,
      item: need.item,
      description: need.description
    })
      .then(() => props.history.push("/needs-board"))
  }

  return (
    <div className="edit-need">
      <form className="textForm">
        <h2 className="textForm__title">Update the information for this donation need.</h2>
        <fieldset>
            <div className="form-group">
              <label htmlFor="item">Item:</label>
                <input type="text" id="item" name="item" defaultValue={need.item} onChange={handleControlledInputChange} required autoFocus className="form-control"></input>
                <label htmlFor="description">Description: </label>
                <textarea id="description" name="description" rows="5" required autoFocus className="form-control"
                    defaultValue={need.description}
                    onChange={handleControlledInputChange}>
                </textarea>
            </div>
        </fieldset>
        <button className="save-need-edit" type="submit"
              onClick={e => {
                  e.preventDefault()
                  newNeed()
              }}>
              Save
          </button>
      </form>
    </div>
  )
}

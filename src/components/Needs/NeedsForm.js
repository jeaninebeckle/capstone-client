import React, { useContext, useRef } from "react"
import { NeedContext } from "./NeedProvider"


export const NeedsForm = (props) => {
  const { addNeed } = useContext(NeedContext)

  const item = useRef(null)
  const description = useRef(null)


  const makeNewNeedCard = () => {
    addNeed({
      item: item.current.value,
      description: description.current.value
    })
      .then(() => props.history.push("/needs-board"))
  }

  return (
    <>
    <div className="new-need">
      <form className="needForm">
            <h2 className="needForm__title">Add a new donation need to the board</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item">Item:</label>
                    <input type="text" id="item" name="item" ref={item} required autoFocus className="form-control"></input>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"
                    ref={description} required autoFocus className="form-control"
                    rows="5">
                    </textarea>
                
                </div>
            </fieldset>
        </form>
      </div>
      <button className="new-need-submit" type="submit"
                onClick={e => {
                    e.preventDefault()
                    makeNewNeedCard()
                }}>
                Create
            </button>
      </>
  )
}

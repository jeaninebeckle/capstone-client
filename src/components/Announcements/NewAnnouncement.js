import React, { useContext, useRef } from "react"
import { AnnouncementContext } from "./AnnouncementProvider"
import moment from "moment"

export const AnnouncementForm = (props) => {
  const { addAnnouncement } = useContext(AnnouncementContext)

  const content = useRef(null)


  const makeNewAnnouncement = () => {
    addAnnouncement({
      content: content.current.value,
      date: moment(new Date()).format('YYYY-MM-DD'),
      submitter: parseInt(localStorage.getItem("journey_token"))
    })
      .then(() => props.history.push("/"))
  }
  console.log(moment(new Date()).format('YYYY-MM-DD'))

  return (
    <form className="announcementForm">
            <h2 className="announcementForm__title">Add a new announcement to the home page</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Content: </label>
                    <input type="text" name="name" ref={content} required autoFocus className="form-control"
                        placeholder="Your text here"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={e => {
                    e.preventDefault()
                    makeNewAnnouncement()
                }}>
                Create
            </button>
        </form>
  )
}

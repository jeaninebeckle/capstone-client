import React, { useContext, useRef } from "react"
import { AnnouncementContext } from "./AnnouncementProvider"
import moment from "moment"
import './AnnouncementList.scss'

export const AnnouncementForm = (props) => {
  const { addAnnouncement } = useContext(AnnouncementContext)

  const content = useRef(null)


  const makeNewAnnouncement = () => {
    addAnnouncement({
      content: content.current.value,
      date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      submitter: parseInt(localStorage.getItem("journey_token"))
    })
      .then(() => props.history.push("/"))
  }

  return (
    <>
    <div className="new-announcement">
      <form className="announcementForm">
            <h2 className="announcementForm__title">Add a new announcement to the home page</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea id="announcement-form" name="content"
                    ref={content} required autoFocus className="form-control"
                        placeholder="Your text here. The enter key will start a new line. Click Create to save." rows="10">
                    </textarea>
                </div>
            </fieldset>

        </form>
      </div>
      <button className="new-a-submit" type="submit"
                onClick={e => {
                    e.preventDefault()
                    makeNewAnnouncement()
                }}>
                Create
            </button>
      </>
  )
}

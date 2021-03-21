import React, { useContext, useEffect } from "react"
import { UserContext } from "../Users/UserProvider"
import { NeedContext } from "./NeedProvider"
import { Card } from 'react-bootstrap'


export const NeedsList = ({ history }) => {
  const { needs, getNeeds, deleteNeed } = useContext(NeedContext)
  const { users, getUserById } = useContext(UserContext)

  const userId = parseInt(localStorage.getItem("journey_user_id"))

  useEffect(() => {
    getNeeds()
    getUserById(userId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="needs-board-page">
        <h2>Needs Board</h2>
          <h4 className="description">description</h4>
              {users.is_staff===true ? <button className="new-need" onClick={() => history.push("/new-need")}>New need</button> : "" }   
              <div className="needs">
                {
                  needs.map(need => {
                      return <Card style={{ width: '18rem' }} key={need.id}>
                          <Card.Body>
                            <Card.Title>{need.item}</Card.Title>
                            <Card.Text>
                              {need.description}
                            </Card.Text>
                            {users.is_staff===true ? <i className="fas fa-trash-alt" onClick={() => window.confirm('Are you sure?') &&
                                  deleteNeed(need.id).then(() => history.push("/needs-board"))
                                  }></i> : ""}
                          </Card.Body>
                        </Card>
                  })
                }
              </div>
        <div className="empty-footer"></div>
      </div>
    </>
  )
}

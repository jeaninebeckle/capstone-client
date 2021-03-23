import React, { useContext, useEffect } from "react"
import { UserContext } from "../Users/UserProvider"
import { NeedContext } from "./NeedProvider"
import { Card, Container, Row } from 'react-bootstrap'
import './Needs.scss'

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
          <div className="description">When we learn about any needs that our Journey students or their families have, we will post them here. If you can help to fulfill any of the items listed, or if you know about any additional ones to add to the list, please contact Kara.</div>
              {users.is_staff===true ? <button className="new-need-btn" onClick={() => history.push("/new-need")}>New need</button> : "" }  
              <Container className="needs"> 
              <Row className="needs-row">             
                {
                  needs.map(need => {
                      return <Card style={{ width: '18rem' }} key={need.id} className="needs-card">
                          <Card.Body>
                            <Card.Title className="needs-item">{need.item}</Card.Title>
                            <Card.Text>
                              {need.description}
                            </Card.Text>
                            <div class="modification-icons">
                            {users.is_staff===true ? <i className="far fa-edit fa-lg" onClick={() => history.push(`/edit-need/${need.id}`)}></i> : ""}
                            {users.is_staff===true ? <i className="fas fa-trash-alt" onClick={() => window.confirm('Are you sure?') &&
                                  deleteNeed(need.id).then(() => history.push("/needs-board"))
                                  }></i> : ""}
                            </div>
                          </Card.Body>
                        </Card>
                  })
                }
                </Row>
            </Container>
        <div className="empty-footer"></div>
      </div>
    </>
  )
}

import React, { useContext, useEffect } from "react"
import { ResourceContext } from "./ResourceProvider"
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap'
import "./Resources.scss"


export const ResourceList = ({ history }) => {

  const { resources, getResources } = useContext(ResourceContext)
  

  useEffect(() => {
    getResources()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    
    <h1>Resources</h1>
    {
      localStorage.getItem("journey_token") ? <div className="resource-button"><button onClick={() => history.push("/new-resource")}>Add new resource</button></div> : ""
    }

  <Container className="resource-container">
    <Row className="resource-row">
      <Col className="col1" xs={12} md={6}>
      <img className="resource-card" src="school-subjects.png" alt="calculator and notepad"/>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          School Subjects
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <ul>
              {resources.map(resource => {
                return ( resource.category.id === 1 ? 
                <li key={resource.id}><a className="resource-link" href={resource.url} target="blank">{resource.content}</a></li> : ""
                )
              })}
              </ul> 
          </Card.Body>
        </Accordion.Collapse>
        </Card>
      </Accordion>
      </Col>
      <Col className="col2" xs={12} md={6}>
      <img className="resource-card" src="high-school.png" alt="students in a classroom"/>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            High School
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
            <ul>
                {resources.map(resource => {
                  return ( resource.category.id === 4 ? 
                  <li key={resource.id}><a className="resource-link" href={resource.url} target="blank">{resource.content}</a></li> : ""
                  )
                })}
                </ul> 
            </Card.Body>
          </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    {/* </Row> */}
    {/* <Row className="resource-row"> */}
    <Col className="col3" xs={12} md={6}>
    <img className="resource-card" src="college.png" alt="girl holding a diploma"/>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            College
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            <ul>
                {resources.map(resource => {
                  return ( resource.category.id === 2 ? 
                  <li key={resource.id}><a className="resource-link" href={resource.url} target="blank">{resource.content}</a></li> : ""
                  )
                })}
                </ul> 
            </Card.Body>
          </Accordion.Collapse>
          </Card>
      </Accordion>
      </Col>
      <Col className="col4" xs={12} md={6}>
      <img className="resource-card" src="life-skills.png" alt="student driver sign"/>
      <Accordion >
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Life Skills
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
            <ul>
                {resources.map(resource => {
                  return ( resource.category.id === 3 ? 
                  <li key={resource.id}><a className="resource-link" href={resource.url} target="blank">{resource.content}</a></li> : ""
                  )
                })}
                </ul> 
            </Card.Body>
          </Accordion.Collapse>
          </Card>
      </Accordion>
      </Col>
    </Row>
  </Container>
  <div className="empty-footer"></div>
    </>
        
    )
  }

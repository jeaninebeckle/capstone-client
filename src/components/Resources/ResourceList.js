import React, { useContext, useEffect } from "react"
import { ResourceContext } from "./ResourceProvider"
import Collapsible from 'react-collapsible'
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
    
      <div className="grid">
        <div className="div1">
        <h3>School Subjects</h3>
          <section className="school">
            <Collapsible trigger="Click here">
              <ul>
              {resources.map(resource => {
                return ( resource.category.id === 1 ? 
                <li key={resource.id}><a href={resource.url}>{resource.content}</a></li> : ""
                )
              })}
              </ul> 
            </Collapsible>
          </section>
        </div>        
        

        <div className="div2">
        <h3>College</h3>
          <section className="college">
            <Collapsible trigger="Click here">
              <ul>
              {resources.map(resource => {
                return ( resource.category.id === 2 ? 
                <li key={resource.id}><a href={resource.url}>{resource.content}</a></li> : ""
                )
              })}
              </ul> 
            </Collapsible>
          </section>
        </div>
  

        <div className="div3">
        <h3>Life Skills</h3>
          <section className="life-skills">
            <Collapsible trigger="Click here">
              <ul>
              {resources.map(resource => {
                return ( resource.category.id === 3 ? 
                <li key={resource.id}><a href={resource.url}>{resource.content}</a></li> : ""
                )
              })}
              </ul> 
            </Collapsible>
          </section>
        </div>

        <div className="div4">
        <h3>High School</h3>
          <section className="high-school">
            <Collapsible trigger="Click here">
              <ul>
              {resources.map(resource => {
                return ( resource.category.id === 4 ? 
                <li key={resource.id}><a href={resource.url}>{resource.content}</a></li> : ""
                )
              })}
              </ul> 
            </Collapsible>
          </section>
        </div>
        </div>
        </>
        
    )
  }

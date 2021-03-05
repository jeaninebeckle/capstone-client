import React, { useContext, useEffect } from "react"
import { ResourceContext } from "./ResourceProvider"
import Collapsible from 'react-collapsible'

export const ResourceList = () => {

  const { resources, getResources } = useContext(ResourceContext)


  useEffect(() => {
    getResources()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <h1>Resources</h1>
      {resources.map(resource => {
        if(resource.category.id === 1) {
          return (
            <div id="div1">
          <section className="school" key={resource.id}>
            <Collapsible trigger="Click here for School Subject Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul> 
            </Collapsible>
          </section>
        </div>
          )
        }
        if(resource.category.id === 2) {
          return (
            <div id="div2">
          <section className="college" key={resource.id}>
            <Collapsible trigger="Click here for College Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul> 
            </Collapsible>
          </section>
        </div>
          )
        }
        if(resource.category.id === 3) {
          return (
            <div id="div3">
          <section className="life-skills" key={resource.id}>
            <Collapsible trigger="Click here for Life Skill Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul> 
            </Collapsible>
          </section>
        </div>
          )
        }
        if(resource.category.id === 4) {
          return (
            <div id="div4">
          <section className="high-school" key={resource.id}>
            <Collapsible trigger="Click here for High School Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul> 
            </Collapsible>
          </section>
        </div>
          )
        }
        return (
          <>

        <div id="div3">
          <section className="high-school" key={resource.id}>
            <Collapsible trigger="Click here for High School Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul>
            </Collapsible>
          </section>
        </div>
        <div id="div4">
          <section className="college" key={resource.id}>
            <Collapsible trigger="Click here for College Resources">
              <ul>
                <li><a href={resource.url}>{resource.content}</a></li>
              </ul>
            </Collapsible>
          </section>
        </div>
        </>
        )
      })}
    </>
  )
}

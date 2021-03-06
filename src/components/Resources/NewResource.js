import React, { useContext, useRef, useEffect } from "react"
import { CategoryContext } from "../Categories/CategoryProvider"
import { ResourceContext } from "./ResourceProvider"

export const ResourceForm = (props) => {
  const { addResource } = useContext(ResourceContext)
  const { categories, getCategories } = useContext(CategoryContext)

  useEffect(() => {
    getCategories()
  }, [])

  const content = useRef(null)
  const url = useRef(null)
  const category = useRef(null)


  const makeNewResource = () => {
    const categoryId = parseInt(category.current.value)
    
    addResource({
      content: content.current.value,
      url: url.current.value,
      categoryId,
      submitter: parseInt(localStorage.getItem("journey_token"))
    })
      .then(() => props.history.push("/resources"))
  }

  return (
    <form className="resourceForm">
            <h2 className="resourceForm__content">Add a new resource</h2>
            <p>If you've found an online resource that you frequently visit and think would be helpful to other students and tutors, add it to the collection! <br></br>
            All 3 fields must be completed.
            </p>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title: </label>
                    <input type="text" name="content" ref={content} required autoFocus className="form-control"
                        placeholder="Website name / title of resource that will display"
                    />
                    <label htmlFor="name">URL: </label>
                    <input type="text" name="url" ref={url} required autoFocus className="form-control"
                        placeholder="Website link"
                    />                    
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Resource category: </label>
                    <select defaultValue="" name="category" ref={category} id="resourceCategory" className="form-control" >
                        <option value="0">Select the appropriate category</option>
                        {categories.results && categories.results.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.label}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={e => {
                    e.preventDefault()
                    makeNewResource()
                }}>
                Create
            </button>
        </form>
  )
}

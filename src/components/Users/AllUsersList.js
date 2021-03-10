import React, { useContext, useEffect} from "react"
import './AllUsersList.scss'
import { JourneyUserContext } from "./JourneyUserProvider"
import moment from 'moment'

export const AllUsersList = () => {
  const { journeyusers, getJourneyUsers } = useContext(JourneyUserContext)

  useEffect(() => {
    getJourneyUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ margin: "0rem 3rem"}}>
        <h1 id="profiles">User Profiles</h1>
        <article className="users">   
        <table id="all-users">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Display Name</th>
              <th>Status</th>
              <th className="member">Member Since</th>
            </tr>
          </thead>
            { 
                journeyusers.length && journeyusers.map(journeyuser => {
                  return (   
                    <tbody key={journeyuser.id}>          
                    <tr className="users" >
                      <td className="full-name">{journeyuser.user.first_name} {journeyuser.user.last_name}</td>
                      <td className="display-name">{journeyuser.display_name}</td>
                      { journeyuser.user.is_staff === true ? 
                          <td className="user-status">Staff</td> :
                          <td className="user-status">Volunteer</td>                           
                      }
                      <td className="date">{moment(journeyuser.user.date_joined).format('MM/DD/YYYY')}</td>
                    </tr>
                  </tbody>
                )})
              }  
            </table>
        </article>
    </div>
)

}

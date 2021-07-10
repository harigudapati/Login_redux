import React from 'react'
import users from './data.json'

const Dashboard = () => {
    
    return (
        <div>
        {users.length > 0 && (
          <table id="t01">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>PhoneNumber</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
    )
}

export default Dashboard

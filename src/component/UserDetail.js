import React from 'react'
import { Container, Table } from 'reactstrap';
import { useLocation } from "react-router-dom";

const UserDetail = (props) => { 
    
    const location = useLocation()
    console.log(location)

    return (
    <div>
        <Container>
        <h1 className="mx-5 my-3">User Details</h1>
        <Table bordered>
      <thead>
        <tr>
          <th>Details</th>  
          <th>Entry</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{location.state.details.name}</td>  
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{location.state.details.email}</td>
        </tr>
        <tr>
          <th scope="row">Contact</th>
          <td>{location.state.details.contact}</td>
        </tr>
        <tr>
          <th scope="row">Address1</th>
          <td>{location.state.details.add1}</td>
        </tr>
        <tr>
          <th scope="row">Address2</th>
          <td>{location.state.details.add2}</td>
        </tr>
        <tr>
          <th scope="row">City</th>    
          <td>{location.state.details.city}</td>
        </tr>
        <tr>
          <th scope="row">State</th>
          <td>{location.state.details.statevalue}</td>
        </tr>
        <tr>
          <th scope="row">Zip Code</th>
          <td>{location.state.details.zip}</td>
        </tr>
        <tr>
          <th scope="row">Education</th>
          <td>{location.state.details.education}</td>
        </tr>
        <tr>
          <th scope="row">Skills</th>
          <td>{location.state.details.skills}</td>
        </tr>
        <tr>
          <th scope="row">Experience</th>
          <td>{location.state.details.exp}</td>
        </tr>
        <tr>
          <th scope="row">Certification</th>
          <td>{location.state.details.certification}</td>
        </tr>
        <tr>
          <th scope="row">Internship</th>
          <td>{location.state.details.internship}</td>
        </tr>
        <tr>
          <th scope="row">Job Position</th>
          <td>{location.state.details.job_pos}</td>
        </tr>
      </tbody>
    </Table>
  
      </Container>
    </div>
    );
}

export default UserDetail


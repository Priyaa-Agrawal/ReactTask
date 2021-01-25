import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { withRouter } from "react-router-dom";


const UserForm = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [add1, setAdd1] = useState("")
    const [add2, setAdd2] = useState("")
    const [city, setCity] = useState("")
    const [statevalue, setStateValue] = useState("")
    const [zip, setZip] = useState("")
    const [education, setEducation] = useState("")
    const [skills, setSkills] = useState("")
    const [exp, setExp] = useState("")
    const [certification, setCertification] = useState("")
    const [internship, setInternship] = useState("")
    const [job_pos, setJob_pos] = useState("")
    

    let details = {   
      name : name,
      email : email, 
      contact : contact,
      add1 : add1,
      add2 : add2,
      city : city,
      statevalue : statevalue,
      zip : zip,
      education : education,
      skills : skills,
      exp : exp,
      certification : certification,
      internship : internship,
      job_pos : job_pos

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        props.history.push("/UserDetail",  { details });
    }
    return (
    <div>
      <Container>
        <h1 className="mx-5 my-3">User Data</h1>
    <Form className="mx-5 my-3" onSubmit={ handleSubmit }>
      <Row form>
      <Col md={4}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" value ={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" value ={email} onChange={e => setEmail(e.target.value)} placeholder="@" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="contact">Contact Number</Label>
            <Input type="tel" name="contact" pattern="[0-9]{10}" id="contact" value ={contact} onChange={e => setContact(e.target.value)} placeholder="Enter Contact Number" required/>
          </FormGroup>
        </Col>
     
      </Row>

      <Row form>
      <Col md={6}>
      <FormGroup>
        <Label for="Address">Address</Label>
        <Input type="text" name="address" id="Address" value ={add1} onChange={e => setAdd1(e.target.value)} placeholder="1234 Main St" required/>
      </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label for="Address2">Address 2</Label>
        <Input type="text" name="address2" id="Address2" value ={add2} onChange={e => setAdd2(e.target.value)} placeholder="Apartment, studio, or floor" required/>
      </FormGroup>
      </Col>
      </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity" value ={city} onChange={e => setCity(e.target.value)} placeholder="City" required/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="state">State</Label>
            <select name="state" id="state"  value ={statevalue} onChange={e => setStateValue(e.target.value)} className="form-control" required>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
            {/* <Input type="text" name="state" id="exampleState"/> */}
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="number" name="zip" id="exampleZip"  value ={zip} onChange={e => setZip(e.target.value)} placeholder="452001" required/>
          </FormGroup>  
        </Col>
      </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="education">Education</Label>
            <Input type="text" name="education" id="education" value ={education} onChange={e => setEducation(e.target.value)} placeholder="Degree" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input type="text" name="skills" id="skills" value ={skills} onChange={e => setSkills(e.target.value)} placeholder="Skills" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exp">Experience</Label>
            <Input type="number" name="exp" id="exp" value ={exp} onChange={e => setExp(e.target.value)} placeholder="Years" required/>
          </FormGroup>  
        </Col>
      </Row>

      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="Certification">Certification</Label>
            <Input type="text" name="certification" id="Certification" value ={certification} onChange={e => setCertification(e.target.value)} placeholder="Certificates" required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="Internship">Internship</Label>
            <Input type="text" name="internship" id="Internship" value ={internship} onChange={e => setInternship(e.target.value)} placeholder="Internship"  required/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="Job Position">Job Position</Label>
            <Input type="text" name="Job Position" id="Job Position" value ={job_pos} onChange={e => setJob_pos(e.target.value)} placeholder="Job Position"  required/>
          </FormGroup>  
        </Col>
      </Row>


      <Row form>
      <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress">Resume</Label>
        <Input type="file"
              id="myFile"
              name="filename"
              accept=".pdf,.docx"
              />
      </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label for="exampleAddress2">Photo</Label>
        <Input type="file"
              id="myFile"
              name="filename"
              accept=".jpg,.jpeg,.png"
              />
      </FormGroup>
      </Col>
      </Row>

      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck" required/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <br />
      {/* <Link to='/UserDetail'> Submit */}
      <Button type="submit" color="primary">Submit</Button>
      {/* </Link> */}
    </Form>
    </Container>
    </div>
    );
}

export default withRouter(UserForm)


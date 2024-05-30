import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function JobPreferences() {

  let navigate = useNavigate();

  return (
    <div>
      <p style={{ marginLeft: '50px' }}>Step 1 of 2</p>
      <h1 style={{ marginLeft: '50px' }}>Your Job Preferences</h1>
      <p style={{ marginLeft: '50px' }}>Share a few details of the type of job you are looking for</p>
      <h3 style={{ marginLeft: '50px' }}>Base Hourly Rate</h3>

      <Row style={{ width: '80rem', marginLeft: '50px', marginRight: '50px' }} className="mb-3">
        <Col xs={6}>
          <Form>
            <Form.Group as={Col} controlId="formGender">
              <Form.Select defaultValue="Choose...">
                <option>Activity Type</option>
                <option>Indoor Activities</option>
                <option>Outdoor Activities</option>
                <option>Housekeeping Activities</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formMinimum">
              <Form.Label>Minimum</Form.Label>
              <Form.Control type="number" placeholder="Enter minimum hours" />
            </Form.Group>

            <Form.Group as={Col} controlId="formMaximum">
              <Form.Label>Maximum</Form.Label>
              <Form.Control type="number" placeholder="Enter maximum hours" />
            </Form.Group>
            <br></br><hr style={{ width: '620px',height: '5px', backgroundColor: 'black' }}></hr>
            <h5>Maximum distance you are willing to travel?</h5>
            <Form.Group controlId="formRange" style={{ width:'360px'}}>
              <Form.Range min={10} max={100} />
              <p>1 2 3 4 5 6 7 8 9 10</p>
            </Form.Group>
            <hr style={{ width: '620px',height: '5px', backgroundColor: 'black' }}></hr>
            <h5>Write something about yourself</h5>
            <p>Tell the elderly individuals about yourself and what sets you apart</p>
            <input type="text" style={{width:'500px', height:'200px', border:'border-box', borderRadius:'20px'}} />
            <br></br><br></br>
            <Button variant="primary" type="submit" style={{marginLeft:'400px', width:'100px'}} onClick={() => {
                navigate(`/experienceandQualifications`)
              }}>
                Go
            </Button>
          </Form>
        </Col>
        <Col xs={6}>
          <img src="https://mltmpgeox6sf.i.optimole.com/w:900/h:600/q:mauto/f:best/https://idealhcs.com/wp-content/uploads/2023/02/Caregiver-assisting-a-patient-get-up-from-seated-position.jpg" alt="Job preferences" style={{ width: '700px', height: '400px', marginLeft:'10px' }} />
        </Col>
      </Row>
    </div>
  )
}

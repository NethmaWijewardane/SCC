import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Form.jsx';
import { useNavigate } from 'react-router-dom';

function UserType() {

  let navigate = useNavigate();
  return (
    <div>
        <h1 style={{ textAlign: 'center'}}>Select User Type</h1>
    <Row>
      <Col>
        <Card style={{ width: '40rem', marginLeft: '70px', textAlign:'center' }}>
          <Card.Img variant="top" src="https://www.homeinstead.com/contentassets/2355f92b26c041cc841b09d4646e82ef/senior-caregiver-roles.jpeg" />
          <Card.Body>
            <Card.Title>Caregiver</Card.Title>
            <Card.Text>
            You are an individual looking to help senior individuals.
            </Card.Text>
            <Button 
              variant="primary" onClick={() => {
                navigate(`/register`)
              }}>
                Click Here
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '40rem', textAlign:'center', marginRight:'70px' }}>
          <Card.Img variant="top" src="https://www.homecareassistanceoshkosh.com/wp-content/uploads/2018/07/An-Elderly-Man-with-Glasses-Laughing.jpeg" />
          <Card.Body>
            <Card.Title>Senior Individual</Card.Title>
            <Card.Text>
            You are an individual looking to get help from caregivers.
            </Card.Text>
              <Button variant="primary" onClick={() => {
                navigate(`/register`)
              }}>Click Here</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
  );
}

export default UserType;
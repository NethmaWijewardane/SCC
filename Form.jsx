import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Form1() {

  let navigate = useNavigate();

  return (
    <div>
      <h1 style={{ marginLeft: '50px' }}>Registration</h1>
      <Row style={{ width: '80rem', marginLeft: '50px', marginRight:'50px' }} className="mb-3">
        <Col xs={6}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter age" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Row>
                  <Col xs={8}>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                  <Col xs={4}>
                    <Form.Select>
                      <option value="@gmail.com">@gmail.com</option>
                      <option value="@yahoo.com">@yahoo.com</option>
                      <option value="@hotmail.com">@hotmail.com</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" onClick={() => {
                navigate(`/jobPreferences`)
              }}>
              Create Account
            </Button>
          </Form>
        </Col>

        <Col xs={6}>
          <img src="https://dailycaring.com/wp-content/uploads/2017/11/KathyMacaraeg-wrongCG690x400a.jpg" alt="Form image" />
        </Col>
      </Row>
    </div>
  );
}

export default Form1;

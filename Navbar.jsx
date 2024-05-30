import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from 'react-router-dom';

// Define the functional component NavbarComponent
function NavbarComponent() {

  let navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>SeniorCompanion Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto"> {/* changed ms-auto to ml-auto */}
            <Nav.Link 
              onClick={() => {
                navigate(`/`)
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#carepal">Carepal</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <a href="/Bookings.html" className="nav-link">
              Bookings
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

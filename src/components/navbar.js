import React, { useState } from 'react';
import {Navbar, Container, Nav, NavDropdown, Badge, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  

  const cities = [
        'Bangalore - East',
        'Bangalore - South',
        'Bangalore - West',
        'Bangalore - Central',
        'Bangalore - North',
        'Popular Cities',
        'Ahmedabad',
        'Chennai',
        'Gurgaon',
        'Hyderabad',]; // Placeholder array for cities

  return (
    <div className='firstNav'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='bg-danger'>
        <Navbar.Brand href="#home" className='text-white'>
          <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" height="" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Bangalore"
              id="basic-nav-dropdown" className="text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
            >
              {cities.map((city, index) => (
                <NavDropdown.Item key={index} href={`#action/${index}`}>
                  {city}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="MB Prime" id="basic-nav-dropdown">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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"/>
      <Card.Body>
        <Card.Title>Introducing MB Prime</Card.Title>
        <Card.Text>
          <ul>
          <li>Contact upto 30 owners directly</li>
          <li>Access to Prime Exclusive Properties</li>
          </ul>
        </Card.Text>
        <Button variant="danger">JOIN NOW</Button>
      </Card.Body>
    </Card>
 </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="LOGIN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/loginn">login</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Navbar.Text href="#home">Post Property</Navbar.Text>
          <Badge bg="warning" text="dark">FREE</Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;

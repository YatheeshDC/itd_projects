
import React, { useState ,useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrimeDropdown, setShowPrimeDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to track login status
  const [userName, setUserName] = useState(''); 

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handlePrimeMouseEnter = () => {
    setShowPrimeDropdown(true);
  };

  const handlePrimeMouseLeave = () => {
    setShowPrimeDropdown(false);
  };

  const handleLoginMouseEnter = () => {
    setShowLoginDropdown(true);
  };

  const handleLoginMouseLeave = () => {
    setShowLoginDropdown(false);
  };
  const handleLogout = () => {
    // Perform logout actions (e.g., clear local storage, reset login status)
    localStorage.removeItem("userName")
    setIsLoggedIn(false);
    setUserName('');
  };
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };
  // Array of cities
  const cities = [
    'INDIA',
    'Nearby Cities',
    'Bangalore - East',
    'Bangalore - South',
    'Bangalore - West',
    'Bangalore - Central',
    'Bangalore - North',
    'Popular Cities',
    'Ahmedabad',
    'Chennai',
    'Gurgaon',
    'Hyderabad',
    // Add more cities as needed
  ];

  return (
    <Navbar expand="lg" className=" nav_ffix bg-body-tertiary">
      <Container fluid className=' bg-danger'>
        <Navbar.Brand href="#home" className='text-white'>Magicbricks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Bangalore"
              id="basic-nav-dropdown"
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
            <NavDropdown
              title="MB Prime"
              id="basic-nav-dropdown"
              onMouseEnter={handlePrimeMouseEnter}
              onMouseLeave={handlePrimeMouseLeave}
              show={showPrimeDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWA_3vzwyIKyGz_wp2AOFAkCTswlHf8ZsDA&s" />
                <Card.Body>
                  <Card.Title>MB Prime</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Contact upto 30 Owners directly</li>
                      <li>Access to Prime Exclusive Properties</li>
                    </ul>
                  </Card.Text>
                  <Button variant="danger">Join Now</Button>
                </Card.Body>
              </Card>
            </NavDropdown> 
          </Nav>
          <Nav>
          {isLoggedIn&&(
            <NavDropdown
              title={<div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                backgroundColor: 'lightgrey', // Tomato color for the initial badge
                color: 'white',
               //  fontWeight: 'bold',
                width: 30,
                height: 30,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5
              }}>
                {getInitials(userName)}
              </span>
              {`Hi,${userName}`}
            </div>
  }
              id="basic-nav-dropdown"
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              show={showLoginDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>My Activity</Card.Title>
                  <li>Requested Properties</li>
                  <li>Contacted Properties</li>
                  <li>Viewed Properties</li>
                 <li> Shortlisted Properties</li>
                 <li> Searches</li>
                 <li> Recommendations</li>
                 <li> My Profile</li>
            <Link to="/Login">  <li> <Card.Link href="#" className='btn btn-danger'onClick={handleLogout}> logout</Card.Link></li></Link>   
                </Card.Body>
              </Card>
            </NavDropdown>)}
            {!isLoggedIn &&(
            <NavDropdown
              title="LOGIN"
              id="basic-nav-dropdown"
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              show={showLoginDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>My Activity</Card.Title>
                  <li><Card.Link href="#">Requested Properties</Card.Link></li>
                  <li><Card.Link href="#">Contacted Properties</Card.Link></li>
                  <li><Card.Link href="#">Viewed Properties</Card.Link></li>
                 <li> <Card.Link href="#">Shortlisted Properties</Card.Link></li>
                 <li> <Card.Link href="#">Searches</Card.Link></li>
                 <li> <Card.Link href="#">Recommendations</Card.Link></li>
                 <li> <Card.Link href="#">My Profile</Card.Link></li>
            <Link to="/Signup">  <li> <Card.Link href="#" className='btn btn-danger'>Login</Card.Link></li></Link>   
            <NavDropdown.Item  style={{fontSize:'14px',color:'gray',display:'flex'}}>
                 New to Magicbricks?

               <Link to='/Signup'>< Button   style={{color:'red',fontWeight:'bold',marginBottom:'10px',backgroundColor:'white',borderColor:'white'}}>Signup</ Button>
               </Link>
               </NavDropdown.Item>
                </Card.Body>
              </Card>
            </NavDropdown>)}
        
          </Nav>
          <Navbar.Text href="#home" className='hea'><span className=' hlo bg-light'>Post Property 
        </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;



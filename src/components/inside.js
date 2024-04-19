import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Card, Col, Row } from "react-bootstrap";

function Insider(){


return(
    <div>
<Container>
    <Row>
    <h2>Because you searched in Hoodi</h2>
        <Col>
          <Card className='cards'>
      <Card.Body>
        <Card.Title>160+</Card.Title><br></br>
        <Card.Subtitle className="mb-2">Proprties listed for You</Card.Subtitle><br></br>
        <Card.Link href="#">Continue last search...</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='cards'>
      <Card.Body>
        <Card.Subtitle className="mb-2">Get Personalized property recommendations from us</Card.Subtitle><br></br>
        <Card.Link href="#">See all...</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>

    <Card className='cards'>
      <Card.Body>
        <Card.Title>100+</Card.Title><br></br>
        <Card.Subtitle className="mb-2">owner Proprties in Hoodi</Card.Subtitle><br></br>
        <Card.Link href="#">See all...</Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='cards'>
      <Card.Body>
        <Card.Title>250+</Card.Title><br></br>
        <Card.Subtitle className="mb-2">Proprties in popular localities</Card.Subtitle><br></br>
        <Card.Link href="#">See all...</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
          </div>
)
}

export default Insider;
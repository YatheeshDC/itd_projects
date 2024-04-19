import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Property() {
  return (
    <div>
        <Container>
            <Row>
   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;56,000  |  1578 sqft</Card.Title>
        <Card.Text>
          Krishnarajapura, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/03/Photo_h180_w240/2181_WhatsAppImage20240103at12.02.24PM_180_240.jpeg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">2 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;15,000  |  1000 sqft</Card.Title>
        <Card.Text>
          Chandapura, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/05/Photo_h180_w240/72190703_5_PropertyImage680-8343916870389_180_240.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;48,000  |  1376 sqft</Card.Title>
        <Card.Text>
          Phase 1 Electronic City, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img className='ropertyImages' variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;30,000  |  1398 sqft</Card.Title>
        <Card.Text>
          Sahakar Nagar, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>



    </Row>
    </Container>
    </div>
  );
}

export default Property;
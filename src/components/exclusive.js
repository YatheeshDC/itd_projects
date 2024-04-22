import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Exclusive() {
  return (
    <div>
        <Container className='insideCont'>
            <Row>
              <h2>Exclusive Owner Properties in Bangalore</h2>
   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbimages/project/Photo_h310_w462/2023/09/04/Project-Photo-88-Sri-Garnet-Park-Bangalore-5041385_1128_2000_310_462.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">2 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;36,000  |  1203 sqft</Card.Title>
        <Card.Text>
          Hoodi, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2020/Oct/16/Photo_h300_w450/51595087_9_51595087_9_hatsAppImage2020-09-30at11_Fotor_300_450.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;45,000  |  1376 sqft</Card.Title>
        <Card.Text>
          Mahadevapura, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/19/Photo_h300_w450/72255803_1_PropertyImage1713525877754_300_450.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;48,000  |  1376 sqft</Card.Title>
        <Card.Text>
          Yashwanthapura, Bangalore
        </Card.Text>
        <Card.Link href="#">Ready to move</Card.Link>
      </Card.Body>
    </Card>
   </Col>

   <Col>
    <Card className='propertyCards'>
      <Card.Img className='ropertyImages' variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/13/Photo_h300_w450/70387107_10_PropertyImage1702458134032_300_450.jpg" height={'170rem'} />
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
        <Card.Title>&#x20B9;30,000  |  1398 sqft</Card.Title>
        <Card.Text>
          Rajaji Nagar, Bangalore
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

export default Exclusive;
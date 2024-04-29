// // import { Col, Container, Row } from 'react-bootstrap';
// // import Card from 'react-bootstrap/Card';

// // function Property() {
// //   return (
// //     <div>
// //         <Container className='insideCont'>
// //             <Row>
// //               <h2>Popular Owner Properties</h2>
// //    <Col>
// //     <Card className='propertyCards'>
// //       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg" height={'170rem'} />
// //       <Card.Body>
// //       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
// //         <Card.Title>&#x20B9;56,000  |  1578 sqft</Card.Title>
// //         <Card.Text>
// //           Krishnarajapura, Bangalore
// //         </Card.Text>
// //         <Card.Link href="#">Ready to move</Card.Link>
// //       </Card.Body>
// //     </Card>
// //    </Col>

// //    <Col>
// //     <Card className='propertyCards'>
// //       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/03/Photo_h180_w240/2181_WhatsAppImage20240103at12.02.24PM_180_240.jpeg" height={'170rem'} />
// //       <Card.Body>
// //       <Card.Subtitle className="mb-2 text-muted">2 BHK Flat</Card.Subtitle>
// //         <Card.Title>&#x20B9;15,000  |  1000 sqft</Card.Title>
// //         <Card.Text>
// //           Chandapura, Bangalore
// //         </Card.Text>
// //         <Card.Link href="#">Ready to move</Card.Link>
// //       </Card.Body>
// //     </Card>
// //    </Col>

// //    <Col>
// //     <Card className='propertyCards'>
// //       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/19/Photo_h300_w450/72255803_1_PropertyImage1713525877754_300_450.jpg" height={'170rem'} />
// //       <Card.Body>
// //       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
// //         <Card.Title>&#x20B9;48,000  |  1376 sqft</Card.Title>
// //         <Card.Text>
// //           Phase 1 Electronic City, Bangalore
// //         </Card.Text>
// //         <Card.Link href="#">Ready to move</Card.Link>
// //       </Card.Body>
// //     </Card>
// //    </Col>

// //    <Col>
// //     <Card className='propertyCards'>
// //       <Card.Img className='ropertyImages' variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg" height={'170rem'} />
// //       <Card.Body>
// //       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
// //         <Card.Title>&#x20B9;30,000  |  1398 sqft</Card.Title>
// //         <Card.Text>
// //           Sahakar Nagar, Bangalore
// //         </Card.Text>
// //         <Card.Link href="#">Ready to move</Card.Link>
// //       </Card.Body>
// //     </Card>
// //    </Col>
// //     </Row>
// //     </Container>
// //     </div>
// //   );
// // }

// // export default Property;



// import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';

// function ArrowAction(totalCards, cardsToShow) {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex(prevIndex => prevIndex + cardsToShow);
//   };

//   const handlePrev = () => {
//     setIndex(prevIndex => prevIndex - cardsToShow);
//   };

//   return { index, handleNext, handlePrev };
// }

// function Property() {
//   const cardsToShow = 4; // Number of cards to show at once
//   const cards = [
//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Krishnarajapura, Bangalore",
//       link: "#",
//     },
//     // Other card objects...
//   ];

//   const { index, handleNext, handlePrev } = ArrowAction(cards.length, cardsToShow);

//   return (
//     <div>
//       <Container className='insideCont'>
//         <Row>
//           <h2>Popular Owner Properties</h2>
//           {cards.slice(index, index + cardsToShow).map((card, idx) => (
//             <Col key={idx}>
//               <Card className='propertyCards'>
//                 <Card.Img variant="top" src={card.imgUrl} height={'170rem'} />
//                 <Card.Body>
//                   <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
//                   <Card.Title>{card.price}</Card.Title>
//                   <Card.Text>
//                     {card.location}
//                   </Card.Text>
//                   <Card.Link href={card.link}>Ready to move</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         {index > 0 && (
//           <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '140%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
//             <KeyboardDoubleArrowLeftOutlinedIcon />
//           </button>
//         )}
//         {index < cards.length - cardsToShow && (
//           <button className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '140%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
//             <KeyboardDoubleArrowRightOutlinedIcon />
//           </button>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Property;


import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import { Link } from 'react-router-dom';

function ArrowAction(totalCards) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
  };

  return { index, handleNext, handlePrev };
}

function Property() {
  const cards = [
    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
      subtitle: "3 BHK Flat",
      price: "₹56,000 | 1578 sqft",
      location: "Krishnarajapura, Bangalore",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/04/Photo_h180_w240/70303735_8_PropertyImage170-56177385649784_180_240.jpg",
      subtitle: "2 BHK Flat",
      price: "₹45,000 | 1207 sqft",
      location: "Hulimaavu, Bangalore",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/29/Photo_h180_w240/72074739_10_f22df317c8746eda7d323cdf71db022_180_240.jpeg",
      subtitle: "2 BHK Flat",
      price: "₹50,000 | 1578 sqft",
      location: "Kaikondrahalli, Bangalore",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpghttps://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpg",
      subtitle: "3 BHK Flat",
      price: "₹60,000 | 1824 sqft",
      location: "Hebbal Kempapura, Bangalore",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/05/Photo_h180_w240/70312683_2_RWBEDROOM02_180_240.JPG",
      subtitle: "2 BHK Flat",
      price: "₹45,000 | 1578 sqft",
      location: "Yerthiganahalli Devanahalli, Bangalore",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/09/Photo_h180_w240/70312925_1_PropertyImage1702124171328_180_240.jpg",
      subtitle: "4 BHK Flat",
      price: "₹65,000 | 1578 sqft",
      location: "Whitefield, Bangalore",
      link: "#",
    },
    // Other card objects...
  ];
  const { index, handleNext, handlePrev } = ArrowAction(cards.length);

  // Define the array of indices representing the positions of the cards
  const cardPositions = [0, 1, 2, 3];

  return (
    <div>
      <Container className='insideCont'>
        <Row>
          <h2>Popular Owner Properties</h2>
          {cardPositions.map(position => (
            <Col key={position}>
              <Card className='propertyCards' style={{ display: 'block' }}>
                {/* Use the index to dynamically change the content of the cards */}
                <Card.Img variant="top" src={cards[(index + position) % cards.length].imgUrl} height={'170rem'} />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{cards[(index + position) % cards.length].subtitle}</Card.Subtitle>
                  <Card.Title>{cards[(index + position) % cards.length].price}</Card.Title>
                  <Card.Text>
                    {cards[(index + position) % cards.length].location}
                  </Card.Text>
              <Link to="/more"> 
              <Card.Link href={cards[(index + position) % cards.length].link}>Ready to move</Card.Link>
              </Link> 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '155%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
          <KeyboardDoubleArrowLeftOutlinedIcon />
        </button>
        <button className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '155%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </button>
      </Container>
    </div>
  );
}

export default Property;
import React, {  } from 'react';
import {  Container, Row, Col, Card, Button } from 'react-bootstrap';
import { GeoAlt, StarFill } from 'react-bootstrap-icons';
import NavBar from './NavBar';
import './TouristAttractionsPage.css';

const TouristAttractionsPage = () => {
  const mainAttractions = [
    {
      id: 1,
      name: 'The Bund',
      comments: '10000+ comments',
      location: 'Zhongshan East 1st Road',
      intro: 'The Bund, located along the Huangpu River, is a renowned waterfront area in central Shanghai. Known for its historical architecture, the Bund offers a picturesque view of the city'+'s skyline, blending modern skyscrapers with colonial-era buildings. It has been a symbol of Shanghai'+'s cosmopolitan history and is a must-visit for tourists looking to experience the unique blend of East and West.',
      ticket: 'Buy a ticket',
      images: ['attraction1-1.jpg', 'attraction1-2.jpg']
    },
    {
      id: 2,
      name: 'Jade Buddha Temple',
      comments: '5000+ comments',
      location: 'No. 170, Anyuan Road, Putuo District',
      intro: 'The Jade Buddha Temple is a famous Buddhist temple located in the bustling city of Shanghai. It is well-known for its two jade Buddha statues imported from Burma, which are exquisitely carved from white jade. The serene environment and beautiful statues provide a tranquil escape from the city'+'s hustle and bustle, making it a popular spot for both worshippers and tourists.',
      ticket: 'Buy a ticket',
      images: ['attraction2-1.jpg', 'attraction2-2.jpg']
    },
    {
      id: 3,
      name: 'Shanghai DisneyLand',
      comments: '10000+ comments',
      location: 'No. 310 Huangzhao Road, Pudong New Area',
      intro: 'Shanghai Disneyland is a magical theme park offering a family-friendly atmosphere with numerous attractions and entertainment options. It features unique attractions and experiences designed especially for the Chinese market, alongside beloved classic Disney rides and shows. The enchanting environment and the presence of iconic Disney characters make it a must-visit destination for families and Disney enthusiasts.',
      ticket: 'Buy a ticket',
      images: ['plan.jpg', 'attraction3-2.jpg']
    },
    {
      id: 4,
      name: 'Oriental Pearl TV Tower',
      comments: '10000+ comments',
      location: 'No.1 Century Avenue, Lujiazui, Pudong New Area',
      intro: 'The Oriental Pearl TV Tower, situated in the Pudong district, is an iconic symbol of modern Shanghai. Standing at 468 meters, it offers panoramic views of the city from its observation decks. The tower also features a revolving restaurant, exhibition facilities, and a shopping mall. Its futuristic design and breathtaking views make it one of Shanghai'+'s top tourist attractions.',
      ticket: 'Buy a ticket',
      images: ['attraction4-1.jpg', 'attraction4-2.jpg']
    }
  ];

  const otherAttractions = [
    { id: 1, location: 'Shanghai Wild Zoo', ticket: '￥120', image: 'other1.jpg' },
    { id: 2, location: 'Shanghai Oriental land', ticket: '￥25', image: 'other2.jpg' },
    { id: 3, location: 'HappyValley', ticket: '￥$130', image: 'other3.jpg' },
    { id: 4, location: 'Fudan University', ticket: 'free', image: 'other4.jpg' },
    { id: 5, location: 'Zhu Jia Jiao', ticket: '￥30', image: 'other5.jpg' },
    { id: 6, location: 'NanJing Road', ticket: '￥22', image: 'other6.jpg' },
    { id: 7, location: 'Xu Jia Hui', ticket: '￥28', image: 'other7.jpg' },
    { id: 8, location: 'Yu Garden', ticket: '￥35', image: 'other8.jpg' }
  ];

  return (
    <div className="tourist-attractions-page">
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">Must-Visit Tourist Attractions</h1>
        </div>
        <Row className="my-4">
          {mainAttractions.map(attraction => (
            <Col md={12} key={attraction.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h3 className='bold-text'>{attraction.name}</h3>
                      <p ><StarFill className="me-2 comment" />{attraction.comments} <GeoAlt className="me-2 maplogo" onClick={() => window.open(`https://www.google.com/maps/search/${attraction.location}`, '_blank')} />{attraction.location}</p>
                      <p className='align'>{attraction.intro}</p>
                      <Button className='button' variant="outline-primary" href="https://www.ctrip.com">{attraction.ticket}</Button>
                    </Col>
                    <Col md={4}>
                      {attraction.images.slice(0, 2).map((image, index) => (
                        <div style={{ height: '300px', overflow: 'hidden' }}><img key={index} src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={`Attraction ${attraction.id}`} className="img-thumbnail mb-5" />
                        
                        </div>
                        
                      ))}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="background">
          <h2 className="title">Other Attractions</h2>
        </div>
        <Row className="my-4">
          {otherAttractions.map(attraction => (
            <Col md={3} key={attraction.id} className="mb-4">
            <Card>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={`${process.env.PUBLIC_URL}/assets/${attraction.image}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{attraction.location} <GeoAlt className="me-2" onClick={() => window.open(`https://www.google.com/maps/search/${attraction.location}`, '_blank')} /></Card.Title>
                <p>Ticket: {attraction.ticket}</p>
                <Button variant="primary" href="https://www.ctrip.com">Buy a ticket</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default TouristAttractionsPage;

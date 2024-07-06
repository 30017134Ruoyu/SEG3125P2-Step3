import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup, InputGroup } from 'react-bootstrap';
import NavBar from './NavBar';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import './PlanningTripPage.css';

const PlanningTripPage = () => {
  const [places, setPlaces] = useState([
    { id: 1, name: 'Shanghai Museum', image: '/assets/museum.jpg' },
    { id: 2, name: 'Shanghai DisneyLand', image: '/assets/plan.jpg' }
  ]);

  const [recommendedPlaces] = useState([
    { id: 3, name: 'The Bund', image: '/assets/attraction1-1.jpg' },
    { id: 4, name: 'Yu Garden', image: '/assets/other8.jpg' },
    { id: 5, name: 'HappyValley', image: '/assets/other3.jpg' },
    { id: 6, name: 'Oriental Pearl Tower', image: '/assets/other4.jpg' },
    { id: 7, name: 'Shanghai Tower', image: '/assets/other5.jpg' },
    { id: 8, name: 'Nanjing Road', image: '/assets/other6.jpg' }
  ]);

  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Nansho-Mantouten', description: 'Famous restaurant known for its delicious dishes.', image: '/assets/restaurant1.jpg' }
  ]);
  const [recommendedRestaurants] = useState([
    { id: 2, name: 'GuangMing Restaurant', image: '/assets/restaurant2.jpg' },
    { id: 3, name: 'GoodFellas', image: '/assets/restaurant3.jpg' },
    { id: 4, name: 'Yone', image: '/assets/restaurant4.jpg' },
    { id: 5, name: 'Da Hu Chun', image: '/assets/restaurant5.jpg' },
    { id: 6, name: 'Trusu', image: '/assets/restaurant6.jpg' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const filteredPlaces = recommendedPlaces.filter(place =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredRestaurants = recommendedRestaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addPlace = (place) => {
    setPlaces([...places, { id: places.length + 1, name: place.name, description: place.description, image: place.image }]);
  };

  const removePlace = (id) => {
    setPlaces(places.filter(place => place.id !== id));
  };

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, { id: restaurants.length + 1, name: restaurant.name, description: restaurant.description, image: restaurant.image }]);
  };

  const removeRestaurant = (id) => {
    setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
  };

  const getDates = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  return (
    <div className='planning-trip-page'>
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">Plan your trip</h1>
        </div>
        <Container className="mt-5">
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={6}>
                  <Form.Group className="d-flex align-items-center">
                    <Form.Label className="me-2 mb-0">Start:</Form.Label>
                    <InputGroup>
                      <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Select start date"
                        className="form-control"
                      />
                      <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="d-flex align-items-center">
                    <Form.Label className="me-2 mb-0">End:</Form.Label>
                    <InputGroup>
                      <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        placeholderText="Select end date"
                        className="form-control"
                      />
                      <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {getDates(startDate, endDate).map((date, index) => (
            <Card className="mt-4" key={index}>
              <Container className='back'> 
                <Card.Header as="h5">{date.toDateString()}</Card.Header>
              </Container>
              <Card.Body>
                <Card className="mt-4">
                  <Container className='back'> 
                    <Card.Header as="h5">Places to visit</Card.Header>
                  </Container>
                  <ListGroup variant="flush">
                    {places.map((place, index) => (
                      <ListGroup.Item key={place.id}>
                        <Row>
                          <Col md={1}>
                            <Button variant="outline-danger" size="sm" onClick={() => removePlace(place.id)}>-</Button>
                          </Col>
                          <Col md={1}>{index + 1}</Col>
                          <Col md={7}>
                            <h6>{place.name}</h6>
                            <p className="text-muted">{place.description}</p>
                          </Col>
                          <Col md={3}>
                            <img src={place.image} alt={place.name} className="img-fluid" />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>

                <Card className="mt-4">
                  <Container className='back'> 
                    <Card.Header as="h5">Recommended attractions</Card.Header>
                  </Container>
                  <Card.Body>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search places"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </InputGroup>
                    <Row className="flex-nowrap" style={{ overflowX: 'auto' }}>
                      {filteredPlaces.map((place, index) => (
                        <Col key={index} md={4} className="mb-3">
                          <Card>
                            <Card.Img variant="top" src={place.image} />
                            <Card.Body>
                              <Card.Title>{place.name}</Card.Title>
                              <Button variant="outline-primary" onClick={() => addPlace(place)}>+</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>

                <Card className="mt-4">
                  <Container className='back'> 
                    <Card.Header as="h5">Places to eat</Card.Header>
                  </Container>
                  <ListGroup variant="flush">
                    {restaurants.map((restaurant, index) => (
                      <ListGroup.Item key={restaurant.id}>
                        <Row>
                          <Col md={1}>
                            <Button variant="outline-danger" size="sm" onClick={() => removeRestaurant(restaurant.id)}>-</Button>
                          </Col>
                          <Col md={1}>{index + 1}</Col>
                          <Col md={7}>
                            <h6>{restaurant.name}</h6>
                            <p className="text-muted">{restaurant.description}</p>
                          </Col>
                          <Col md={3}>
                            <img src={restaurant.image} alt={restaurant.name} className="img-fluid" />
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>

                <Card className="mt-4">
                  <Container className='back'> 
                    <Card.Header as="h5">Recommended restaurants</Card.Header>
                  </Container>
                  <Card.Body>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search restaurants"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </InputGroup>
                    <Row className="flex-nowrap" style={{ overflowX: 'auto' }}>
                      {filteredRestaurants.map((restaurant, index) => (
                        <Col key={index} md={4} className="mb-3">
                          <Card>
                            <Card.Img variant="top" src={restaurant.image} />
                            <Card.Body>
                              <Card.Title>{restaurant.name}</Card.Title>
                              <Button variant="outline-primary" onClick={() => addRestaurant(restaurant)}>+</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>

              </Card.Body>
            </Card>
          ))}
        </Container>
      </Container>
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default PlanningTripPage;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup, InputGroup, Alert } from 'react-bootstrap';
import NavBar from './NavBar';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import './PlanningTripPage.css';

const PlanningTripPage = () => {
  const { t } = useTranslation();

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
    { id: 1, name: 'Nansho-Mantouten', description: t('nansho_description'), image: '/assets/restaurant1.jpg' }
  ]);

  const [recommendedRestaurants] = useState([
    { id: 2, name: 'GuangMing Restaurant', image: '/assets/restaurant2.jpg' },
    { id: 3, name: 'GoodFellas', image: '/assets/restaurant3.jpg' },
    { id: 4, name: 'Yone', image: '/assets/restaurant4.jpg' },
    { id: 5, name: 'Da Hu Chun', image: '/assets/restaurant5.jpg' },
    { id: 6, name: 'Trusu', image: '/assets/restaurant6.jpg' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    // 组件加载时设置默认日期为当前日期
    const today = new Date();
    setStartDate(today);
    setEndDate(today);
  }, []);

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

  const handleStartDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      setDateError('Please select a date from today onwards.');
      setStartDate(null);
    } else {
      setDateError('');
      setStartDate(date);
      if (endDate && date > endDate) {
        setEndDate(date);
      }
    }
  };

  const handleEndDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) {
      setDateError('Please select a date from today onwards.');
      setEndDate(null);
    } else if (startDate && date < startDate) {
      setDateError('End date cannot be earlier than start date.');
      setEndDate(null);
    } else {
      setDateError('');
      setEndDate(date);
    }
  };

  const getDates = (startDate, endDate) => {
    if (!startDate || !endDate) return [];
    
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleReset = () => {
    setPlaces([]);
    setRestaurants([]);
    setSearchTerm('');
    setStartDate(new Date());
    setEndDate(new Date());
    setDateError('');
  };

  return (
    <div className='planning-trip-page'>
      <NavBar />
      <div className="content">
        <Container className="text-center mt-1">
          <div className="title-container">
            <h1 className="title">{t('plan_trip')}</h1>
          </div>
          <div className='back mt-5'>
            <h1>
              {t('create')}
            </h1>
          </div>
          <div className='intro'>
            <h4>{t('intro')}</h4>
          </div>
          
          <Container className="mt-5">
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={6}>
                    <Form.Group className="d-flex align-items-center">
                      <Form.Label className="me-2 mb-0">{t('start')}:</Form.Label>
                      <InputGroup>
                        <DatePicker
                          selected={startDate}
                          onChange={handleStartDateChange}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          minDate={new Date()}
                          placeholderText={t('select_start_date')}
                          className="form-control"
                        />
                        <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="d-flex align-items-center">
                      <Form.Label className="me-2 mb-0">{t('end')}:</Form.Label>
                      <InputGroup>
                        <DatePicker
                          selected={endDate}
                          onChange={handleEndDateChange}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate || new Date()}
                          placeholderText={t('select_end_date')}
                          className="form-control"
                        />
                        <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                {dateError && <Alert variant="danger" className="mt-3">{dateError}</Alert>}
                <Button variant="secondary" onClick={handleReset} className="mt-3">
                  {t('reset')}
                </Button>
              </Card.Body>
            </Card>

            {startDate && endDate && !dateError && getDates(startDate, endDate).map((date, index) => (
              <Card className="mt-4" key={index}>
                <Card.Header as="h5" className="back">{date.toDateString()}</Card.Header>
                <Card.Body>
                  <Card className="mt-4">
                    <Card.Header as="h5" className="back">{t('places_to_visit')}</Card.Header>
                    <ListGroup variant="flush" className="card-scroll">
                      {places.map((place, index) => (
                        <ListGroup.Item key={place.id}>
                          <Row>
                            <Col md={1}>
                              <Button variant="outline-danger" size="sm" onClick={() => removePlace(place.id)}>-</Button>
                            </Col>
                          
                            <Col md={7}>
                              <h5>{t(`places.${place.name}`)}</h5>
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
                    <Card.Header as="h5" className="back">{t('recommended_attractions')}</Card.Header>
                    <Card.Body>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder={t('search_places')}
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
                                <Card.Title>{t(`places.${place.name}`)}</Card.Title>
                                <Button variant="outline-primary" onClick={() => addPlace(place)}>{t('add')}</Button>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>

                  <Card className="mt-4">
                    <Card.Header as="h5" className="back">{t('places_to_eat')}</Card.Header>
                    <ListGroup variant="flush" className="card-scroll">
                      {restaurants.map((restaurant, index) => (
                        <ListGroup.Item key={restaurant.id}>
                          <Row>
                            <Col md={1}>
                              <Button variant="outline-danger" size="sm" onClick={() => removeRestaurant(restaurant.id)}>-</Button>
                            </Col>
                            
                            <Col md={7}>
                              <h5>{t(`restaurants.${restaurant.name}`)}</h5>
                              <p className="text-muted"></p>
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
                    <Card.Header as="h5" className="back">{t('recommended_restaurants')}</Card.Header>
                    <Card.Body>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder={t('search_restaurants')}
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
                                <Card.Title>{t(`restaurants.${restaurant.name}`)}</Card.Title>
                                <Button variant="outline-primary" onClick={() => addRestaurant(restaurant)}>{t('add')}</Button>
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
        <br></br>
      </div>
      <footer className="footer">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default PlanningTripPage;
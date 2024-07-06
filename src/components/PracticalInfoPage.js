import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

import NavBar from './NavBar';
import './PracticalInfoPage.css';

const PracticalInfoPage = () => {
  const [place, setPlace] = useState('');

  const handleSearch = () => {};

  const staticWeatherData = {
    city: "Shanghai",
    forecast: [
      { date: "1 Jul", temp: "26.9°C", description: "Overcast", humidity: "90%", wind: "Northwest Light Air" },
      { date: "2 Jul", temp: "27°C", description: "Rain", humidity: "85%", wind: "East Light Air" },
      { date: "3 Jul", temp: "28°C", description: "Sunny", humidity: "80%", wind: "South Light Air" },
      { date: "4 Jul", temp: "29°C", description: "Cloudy", humidity: "75%", wind: "West Light Air" },
      { date: "5 Jul", temp: "30°C", description: "Rain", humidity: "85%", wind: "Northwest Light Air" },
      { date: "6 Jul", temp: "31°C", description: "Sunny", humidity: "70%", wind: "South Light Air" },
      { date: "7 Jul", temp: "32°C", description: "Cloudy", humidity: "65%", wind: "West Light Air" },
    ]
  };

  return (
    <div className="practical-info-page">
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">Practical Information</h1>
        </div>
        
          <h2 className="mt-5 back">Public Transport</h2>
        
        
        <Form className="my-4" onSubmit={e => e.preventDefault()}>
          <Form.Control 
            type="text" 
            placeholder="Enter any place" 
            value={place} 
            onChange={e => setPlace(e.target.value)} 
          />
          <Button variant="outline-primary" className="mt-2" onClick={handleSearch}>Search</Button>
        </Form>
        <div className="map-placeholder my-5">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/static-map.png`} 
            alt="Static Map"
            className="img-fluid static-map"
          />
        </div>
        <h2 className="mt-5 back">Shanghai Metro</h2>
        
        <p className='type'>The Shanghai Metro is one of the largest and most comprehensive urban transit systems in the world.Shanghai Metro has a total of 19 operating lines. These lines cover most areas in Shanghai city and surrounding areas, providing convenient public transportation services for millions of citizens and tourists.</p>
        <div className="metro-map-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/shanghai-metro.jpg`} alt="Shanghai Metro" className="img-fluid metro-map" />
        </div>
        
        <h2 className="mt-5 back">7-Day Shanghai Weather Forecast</h2>
        <div className="weather-info">
          <Row>
            {staticWeatherData.forecast.map((day, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="weather-card">
                  <Card.Body>
                    <Card.Title>{day.date}</Card.Title>
                    <p>Temperature: {day.temp}</p>
                    <p>{day.description}</p>
                    <p>Humidity: {day.humidity}</p>
                    <p>Wind: {day.wind}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <h2 className="mt-5 back">Useful Application</h2>
        
        <Row className="my-4">
          {['Metropolis', 'Dazhong Dianping', 'Ctrip', 'Gaode map'].map((info, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/${info}.jpg`} />
                <Card.Body>
                  <Card.Title>{info.charAt(0).toUpperCase() + info.slice(1)}</Card.Title>
                  <Button variant="primary">Download</Button>
                </Card.Body>
              </Card>
            </Col>))}
        </Row>

      </Container>
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default PracticalInfoPage;

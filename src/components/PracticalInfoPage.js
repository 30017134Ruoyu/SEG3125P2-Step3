import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NavBar from './NavBar';
import './PracticalInfoPage.css';

const PracticalInfoPage = () => {
  const { t } = useTranslation();
  const [place, setPlace] = useState('');

  const handleSearch = () => {};

  const staticWeatherData = {
    city: "Shanghai",
    forecast: [
      { date: "1 Jul", temp: "26.9°C", description: "Overcast", humidity: "90%", wind: t('northwest_light_air'), icon: "bi-cloud" },
      { date: "2 Jul", temp: "27°C", description: "Rain", humidity: "85%", wind: t('east_light_air'), icon: "bi-cloud-rain" },
      { date: "3 Jul", temp: "28°C", description: "Sunny", humidity: "80%", wind: t('south_light_air'), icon: "bi-sun" },
      { date: "4 Jul", temp: "29°C", description: "Cloudy", humidity: "75%", wind: t('west_light_air'), icon: "bi-cloudy" },
      { date: "5 Jul", temp: "30°C", description: "Rain", humidity: "85%", wind: t('northwest_light_air'), icon: "bi-cloud-rain" },
      { date: "6 Jul", temp: "31°C", description: "Sunny", humidity: "70%", wind: t('south_light_air'), icon: "bi-sun" },
      { date: "7 Jul", temp: "32°C", description: "Cloudy", humidity: "65%", wind: t('west_light_air'), icon: "bi-cloudy" },
    ]
  };

  return (
    <div className="practical-info-page">
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">{t('practical_information')}</h1>
        </div>
        
        <h2 className="mt-5 back">{t('public_transport')}</h2>
        
        <Form className="my-4" onSubmit={e => e.preventDefault()}>
          <Form.Control 
            type="text" 
            placeholder={t('enter_place')} 
            value={place} 
            onChange={e => setPlace(e.target.value)} 
          />
          <Button variant="outline-primary" className="mt-2" onClick={handleSearch}>{t('search')}</Button>
        </Form>
        <div className="map-placeholder my-5">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/static-map.png`} 
            alt="Static Map"
            className="img-fluid static-map"
          />
        </div>
        <h2 className="mt-5 back">{t('shanghai_metro')}</h2>
        
        <p className='type'>{t('metro_description')}</p>
        <div className="metro-map-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/shanghai-metro.jpg`} alt="Shanghai Metro" className="img-fluid metro-map" />
        </div>
        
        <h2 className="mt-5 back">{t('7_day_weather')}</h2>
        <div className="weather-info">
          <Row>
            {staticWeatherData.forecast.map((day, index) => (
              <Col md={4} key={index} className="mb-3">
                <Card className="weather-card">
                  <Card.Body>
                    <Card.Title>{day.date}</Card.Title>
                    <div className="weather-icon">
                      <i className={`bi ${day.icon}`} style={{ fontSize: '2rem' }}></i>
                    </div>
                    <p><i className="bi bi-thermometer-half"></i> : {day.temp}</p>
                    <p><i className="bi bi-water"></i> : {day.humidity}</p>
                    <p><i className="bi bi-wind"></i>: {day.wind}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <h2 className="mt-5 back">{t('useful_applications')}</h2>
        
        <Row className="my-4">
          {['metropolis', 'dazhong', 'ctrip', 'gaode'].map((info, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/${info}.jpg`} onError={(e) => e.target.style.display = 'none'} />
                <Card.Body>
                  <Card.Title>{t(info)}</Card.Title>
                  <Button variant="primary">{t('download')}</Button>
                </Card.Body>
              </Card>
            </Col>))}
        </Row>
      </Container>
      <footer className="footer text-center py-3">{t('footer_text')}</footer>
    </div>
  );
};

export default PracticalInfoPage;

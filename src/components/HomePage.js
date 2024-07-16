import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className='home-page'>
      <NavBar />
      <Container className="text-center mt-1">
        <Carousel interval={3000}>
          <Carousel.Item>
            <div className="title-container">
              <h1 className="title">{t('welcome_title')}</h1>
            </div>
            <Carousel.Caption>
              <h3>{t('modern_city')}</h3>
              <p>{t('shanghai_skyline')}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/tourist-attractions">
              <div className="title-container2">
                <h1 className="title">{t('find_attractions')}</h1>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/food-recommendations">
              <div className="title-container3">
                <h1 className="title">{t('find_restaurants')}</h1>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <section className="content-section">
          <h2 className='back'>{t('overview')}</h2>
          <p><strong>{t('overview_content1')}</strong></p>
          <p>{t('overview_content2')}</p>
          <p>{t('overview_content3')}</p>
        </section>
        <div className="video-container">
          <video width="100%" controls>
            <source src="/assets/shanghai.mp4" type="video/mp4" />
          </video>
        </div>
      </Container>
      <Container>
        <Row className="mt-4">
          <Col md={6} className="p-0">
            <img 
              src="/assets/travel1.jpg" 
              alt="Shanghai Cuisine" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>{t('explore_tourist_attractions')}</h3>
            <p>{t('explore_tourist_attractions_desc')}</p>
            <Link to="/tourist-attractions" className="btn btn-outline-light align-self-start mt-3">
              {t('learn_more')}
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-4 height">
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>{t('explore_shanghai_cuisine')}</h3>
            <p>{t('explore_shanghai_cuisine_desc')}</p>
            <Link to="/food-recommendations" className="btn btn-outline-light align-self-start mt-3">
              {t('learn_more')}
            </Link>
          </Col>
          <Col md={6} className="p-0">
            <img 
              src="/assets/rest.jpg" 
              alt="Shanghai Cuisine" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-4">
          <Col md={6} className="p-0">
            <img 
              src="/assets/guide.jpg" 
              alt="Shanghai Cuisine" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>{t('create_travel_plan')}</h3>
            <p>{t('create_travel_plan_desc')}</p>
            <Link to="/planning-trip" className="btn btn-outline-light align-self-start mt-3">
              {t('learn_more')}
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-4">
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>{t('share_mood')}</h3>
            <p>{t('share_mood_desc')}</p>
            <Link to="/communication" className="btn btn-outline-light align-self-start mt-3">
              {t('learn_more')}
            </Link>
          </Col>
          <Col md={6} className="p-0">
            <img 
              src="/assets/communi.jpg" 
              alt="Shanghai Cuisine" 
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      <footer className="footer text-center py-3">{t('footer_text')}</footer>
    </div>
  );
};

export default HomePage;

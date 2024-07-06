import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <NavBar />
      <Container className="text-center mt-1">
        <Carousel interval={3000}>
          <Carousel.Item>
            <div className="title-container">
              <h1 className="title">Welcome to Shanghai</h1>
            </div>
            <Carousel.Caption>
              <h3>Modern city</h3>
              <p>Shanghai Skyline at dusk</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/tourist-attractions">
              <div className="title-container2">
                <h1 className="title">Find amazing attractions</h1>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/food-recommendations">
              <div className="title-container3">
                <h1 className="title">Find amazing restaurants</h1>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <section className="content-section">
          <h2 className='back'>Overview</h2>
          <p><strong>With a population of more than 24 million (2018), Shanghai is the China's most populous metropolis, and one of the four provincial-level municipalities under the direct control of Central Government, which proclaims its unique importance in politics and economy.</strong></p>
          <p>Shanghai was first set up as a county by then government in 1292 (Yuan Dynasty). After 700+ years of development, it has grown into the most prosperous, dynamic city in this country. In history of Shanghai, two periods have to be mentioned: in 1910's-1930's Shanghai entered its first heyday. It was the richest city in East Asia, nicknamed as "Oriental Paris", when European style buildings were widely constructed at city downtown, which can still be seen on the Bund and the former French Concession currently. From 1990's to present, Shanghai got revived, and its economy was put back on the right track because of the lift of market restriction and opening up to the outside world. An unprecedented construction boom during the period made Pudong area a pride of Chinese people.</p>
          <p>Maybe Shanghai can't match the epic history of Beijing or Xi'an's grander sights, but it is the hotspot of modern China, even the birthplace of China's Communist Party. There is a lot to see, experience and taste here, a place in China that can never be missed out.</p>
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
            <h3>Explore Tourist Attraction</h3>
            <p>Discover the famous tourist attractions in Shanghai, having fun!</p>
            <Link to="/tourist-attractions" className="btn btn-outline-light align-self-start mt-3">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-4 height">
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>Explore Shanghai Cuisine</h3>
            <p>Discover the rich flavors and unique dishes that make Shanghai cuisine so special. From xiaolongbao to shengjianbao, experience the taste of authentic Shanghai.</p>
            <Link to="/food-recommendations" className="btn btn-outline-light align-self-start mt-3">
              Learn More
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
            <h3>Create your travel plan</h3>
            <p>Create your own travel plan, feel flexible.</p>
            <Link to="/planning-trip" className="btn btn-outline-light align-self-start mt-3">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-4">
          <Col md={6} className="p-4 d-flex flex-column justify-content-center bg-dark text-white">
            <h3>Share your mood with friends</h3>
            <p>Record your experience when traveling in Shanghai and share your story in the community.</p>
            <Link to="/communication" className="btn btn-outline-light align-self-start mt-3">
              Learn More
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
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default HomePage;

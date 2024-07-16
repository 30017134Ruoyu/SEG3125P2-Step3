import React, { useState } from 'react';
import { Container, Carousel, Row, Col, Card, Button, Pagination, Form } from 'react-bootstrap';
import NavBar from './NavBar';
import { GeoAlt } from 'react-bootstrap-icons'; 
import { useTranslation } from 'react-i18next';
import './FoodRecommendationsPage.css';

const FoodRecommendationsPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const itemsPerPage = 4;

  const restaurants = [
    { id: 1, name: t('nansho_name'), location: t('nansho_location'), average: 50, rating: 4, category: 'Dessert', description: t('nansho_description') },
    { id: 2, name: t('guangming_name'), location: t('guangming_location'), average: 60, rating: 5, category: 'Chinese', description: t('guangming_description') },
    { id: 3, name: t('goodfellas_name'), location: t('goodfellas_location'), average: 240, rating: 5, category: 'Italian', description: t('goodfellas_description') },
    { id: 4, name: t('yone_name'), location: t('yone_location'), average: 170, rating: 4, category: 'Japanese', description: t('yone_description') },
    { id: 5, name: t('dahuchun_name'), location: t('dahuchun_location'), average: 25, rating: 4, category: 'Dessert', description: t('dahuchun_description') },
    { id: 6, name: t('tsuru_name'), location: t('tsuru_location'), average: 165, rating: 4, category: 'Japanese', description: t('tsuru_description') },
    { id: 7, name: t('cantina_name'), location: t('cantina_location'), average: 75, rating: 5, category: 'Mexican', description: t('cantina_description') },
    { id: 8, name: t('bella_name'), location: t('bella_location'), average: 145, rating: 4, category: 'Italian', description: t('bella_description') },
  ];

  const categories = ['Chinese', 'Italian', 'Mexican', 'Dessert', 'Japanese'];
  const ratings = [5, 4, 3, 2, 1];
  const prices = ['>150', '81-150', '30-80', '<30'];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  const handleCuisineChange = (category) => {
    setSelectedCuisine((prevFilters) =>
      prevFilters.includes(category)
        ? prevFilters.filter((filter) => filter !== category)
        : [...prevFilters, category]
    );
    setCurrentPage(1); 
  };

  const handleRatingChange = (rating) => {
    setSelectedRating((prevFilters) =>
      prevFilters.includes(rating)
        ? prevFilters.filter((filter) => filter !== rating)
        : [...prevFilters, rating]
    );
    setCurrentPage(1); 
  };

  const handlePriceChange = (price) => {
    setSelectedPrice((prevFilters) =>
      prevFilters.includes(price)
        ? prevFilters.filter((filter) => filter !== price)
        : [...prevFilters, price]
    );
    setCurrentPage(1); 
  };

  const clearAllFilters = () => {
    setSelectedCuisine([]);
    setSelectedRating([]);
    setSelectedPrice([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine.length === 0 || selectedCuisine.includes(restaurant.category);
    const matchesRating = selectedRating.length === 0 || selectedRating.includes(restaurant.rating);
    const matchesPrice =
      selectedPrice.length === 0 ||
      selectedPrice.some((price) => {
        if (price === '>150') return restaurant.average > 150;
        if (price === '81-150') return restaurant.average >= 81 && restaurant.average <= 150;
        if (price === '30-80') return restaurant.average >= 30 && restaurant.average <= 80;
        if (price === '<30') return restaurant.average < 30;
        return false;
      });

    return matchesSearch && matchesCuisine && matchesRating && matchesPrice;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRestaurants = filteredRestaurants.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getGoogleMapsLink = (location) => {
    const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
    return `${baseUrl}${encodeURIComponent(location)}`;
  };

  const getDianpingLink = () => {
    return 'https://www.dianping.com/';
  };

  const foodDescriptions = [
    { name: t('xiao_long_bao'), src: `${process.env.PUBLIC_URL}/assets/food1.jpg` },
    { name: t('braised_pork_belly'), src: `${process.env.PUBLIC_URL}/assets/food2.jpg` },
    { name: t('scallion_oil_noodles'), src: `${process.env.PUBLIC_URL}/assets/food3.jpg` }
  ];

  return (
    <div className="food-recommendations-page">
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">{t('title')}</h1>
        </div>
        
        <h2 className='search-bar mt-5'>{t('traditional_food')}</h2>

        <Carousel className="my-4">
          {foodDescriptions.map((item, index) => (
            <Carousel.Item key={index}>
              <img 
                className="d-block w-100" 
                src={item.src} 
                alt={item.name} 
                style={{ height: '500px', objectFit: 'cover' }} 
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Row className="my-4">
          <Col md={3}>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder={t('search_restaurants')} value={searchQuery} onChange={handleSearchChange} />
              </Form.Group>
              <h5 className="mt-4 search-bar">{t('cuisine')}</h5>
              {categories.map((category, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={t(`cuisine_${category.toLowerCase()}`)}
                  checked={selectedCuisine.includes(category)}
                  onChange={() => handleCuisineChange(category)}
                />
              ))}
              <h5 className="mt-4 search-bar">{t('rating')}</h5>
              {ratings.map((rating, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={t(`rating_${rating}_stars`)}
                  checked={selectedRating.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
              ))}
              <h5 className="mt-4 search-bar">{t('price_per_person')}</h5>
              {prices.map((price, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={`${price} ¥`}
                  checked={selectedPrice.includes(price)}
                  onChange={() => handlePriceChange(price)}
                />
              ))}
            </Form>
            <Row className="mt-3">
              <Col className="text-center">
                <Button variant="secondary" onClick={clearAllFilters}>
                  {t('clear_all_filters')}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={9}>
            <h2 className="mb-4 search-bar">{t('recommended_restaurants')}</h2>
            <Row>
              {currentRestaurants.map((restaurant, index) => (
                <Col md={12} key={index} className="mb-4">
                  <Card>
                    <Row noGutters>
                      <Col md={3}>
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/restaurant${restaurant.id}.jpg`} />
                      </Col>
                      <Col md={3}>
                        <Card.Body>
                          <Card.Title>{restaurant.name}</Card.Title>
                          <p><a href={getGoogleMapsLink(restaurant.location)} target="_blank" rel="noopener noreferrer"><GeoAlt /></a>{restaurant.location} </p>
                          <p>{t('rating')}: {Array(restaurant.rating).fill().map((_, i) => <span key={i}>⭐</span>)}</p>
                        </Card.Body>
                      </Col>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Text>
                            <p>{restaurant.description}</p>
                          </Card.Text>
                          <Button variant="primary" href={getDianpingLink()} target="_blank" className='mt-5'>{t('book_seat')}</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
            <Pagination className="justify-content-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
        
      </Container>
      <footer className="footer text-center py-3">{t('footer_text')}</footer>
    </div>
  );
};

export default FoodRecommendationsPage;
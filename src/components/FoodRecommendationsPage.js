import React, { useState } from 'react';
import { Container, Carousel, Row, Col, Card, Button, Pagination, Form } from 'react-bootstrap';
import NavBar from './NavBar';
import { GeoAlt } from 'react-bootstrap-icons'; 
import './FoodRecommendationsPage.css';

const FoodRecommendationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const itemsPerPage = 4;

  const restaurants = [
    { id: 1, name: 'Nansho-Mantouten', location: 'No. 70, Yuyuan Old Street, Huangpu District', average: 50, rating: 4, category: 'Dessert', description: 'Nansho-Mantouten is located at No. 85, Yuyuan New Road, Huangpu District, Shanghai. It is a restaurant famous for its traditional Chinese dim sum. The signature dish here is Xiao Long Bao, which is loved by diners for its thin skin, rich fillings and delicious soup.' },
    { id: 2, name: 'GuangMing Restaurant', location: 'No. 588 Huaihai Middle Road', average: 60, rating: 5, category: 'Chinese', description: 'Guangming Restaurant is located in the center of Shanghai. It is a local restaurant with a long history and is well-known locally for its classic Shanghai dishes and unique flavors. Since its establishment, Guangming Village has insisted on using fresh ingredients and traditional cooking methods to provide diners with an authentic taste of Shanghai.' },
    { id: 3, name: 'GoodFellas', location: 'The Bund, No. 7 Yan\'an East Road, Huangpu District', average: 240, rating: 5, category: 'Italian', description: 'Goodfellas Italian Restaurant is located on the Bund, No. 7 Yan'+'an East Road, Huangpu District, Shanghai. With its exquisite dishes and elegant dining environment, it enjoys a high reputation in Shanghai'+'s catering industry. The restaurant offers a variety of classic Italian dishes, including handmade pizza, pasta, seafood dishes and a variety of unique appetizers and desserts.' },
    { id: 4, name: 'Yone', location: '199 Nanjing East Road, 27F, The Shanghai Edition', average: 170, rating: 4, category: 'Japanese', description: 'YONE is a high-end Japanese restaurant, renowned in Shanghai for its exquisite dishes and luxurious dining environment. YONE'+'s menu combines traditional and modern Japanese cuisine, including a variety of fresh sashimi, sushi, tempura and grilled food. The restaurant insists on using high-quality ingredients, and each dish is carefully prepared to ensure a high level of taste and deliciousness.' },
    { id: 5, name: 'Da Hu Chun', location: 'No. 302, Wulumuqi North Road, Jing\'an District', average: 25, rating: 4, category: 'Dessert', description: 'Da Hu Chun is a traditional Chinese restaurant that is loved by local residents and tourists. It is famous for its authentic Shanghai snacks and dim sum. Since its establishment, Da Hu Chun has always insisted on using fresh ingredients and traditional cooking methods to provide diners with the most authentic Shanghai taste.' },
    { id: 6, name: 'Trusu', location: '1218 Middle Yan\'an Road, West Nanjing Road Level 2', average: 165, rating: 4, category: 'Japanese', description: 'Tsuru is a high-end restaurant known for its exquisite Japanese cuisine and sushi. The restaurant'+'"s name "Tsuru" means "crane", which symbolizes longevity and good fortune, just like the food served in the restaurant, which is both healthy and delicious.' },
    { id: 7, name: 'Cantina Agave', location: 'No. 291, Fumin Road, Xuhui District', average: 75, rating: 5, category: 'Mexican', description: 'A contemporary Cali-Tex Mexican restaurant, Cantina caters to both the locals and expats alike, while in a unique location to serve the business professionals as well as the families in the neighborhood.' },
    { id: 8, name: 'Bella Napoli', location: 'Building 4, Lane 946, Changle Road, Jing\'an District, Location 8', average: 145, rating: 4, category: 'Italian', description: 'Glass roof, red brick walls, blackboards with our daily specials. Black and white photos on the walls, sunlight through the skylight, giving our restaurant a charming glow. We offer you the simplest, purest and highest quality food, 80% of the ingredients are imported from Italy, absolutely original, and all the food is cooked with filtered water, so you can eat it with absolute peace of mind!' },
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
    { name: 'Xiao Long Bao', src: `${process.env.PUBLIC_URL}/assets/food1.jpg` },
    { name: 'Braised Pork Belly', src: `${process.env.PUBLIC_URL}/assets/food2.jpg` },
    { name: 'Scallion Oil Noodles', src: `${process.env.PUBLIC_URL}/assets/food3.jpg` }
  ];

  return (
    <div className="food-recommendations-page">
      <NavBar />
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">Restaurants</h1>
        </div>
        
         
          <h2 className='search-bar mt-5'>Triditional Food</h2>
          
          

        
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
                <Form.Control type="text" placeholder="Search restaurants..." value={searchQuery} onChange={handleSearchChange} />
              </Form.Group>
              <h5 className="mt-4 search-bar">Cuisine</h5>
              {categories.map((category, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={category}
                  checked={selectedCuisine.includes(category)}
                  onChange={() => handleCuisineChange(category)}
                />
              ))}
              <h5 className="mt-4 search-bar">Rating</h5>
              {ratings.map((rating, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={`${rating} stars`}
                  checked={selectedRating.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                />
              ))}
              <h5 className="mt-4 search-bar">Price per person</h5>
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
          </Col>
          <Col md={9}>
            <h2 className="mb-4 search-bar">Recommended Restaurants</h2>
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
                          <p>Rating: {Array(restaurant.rating).fill().map((_, i) => <span key={i}>⭐</span>)}</p>
                        </Card.Body>
                      </Col>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Text>
                            <p >{restaurant.description}</p>
                            
                          </Card.Text>
                          <Button variant="primary" href={getDianpingLink()} target="_blank" className='mt-5'>Book a seat</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
            <Pagination className="justify-content-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </Row>
      </Container>
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default FoodRecommendationsPage;

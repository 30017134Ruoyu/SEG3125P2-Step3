import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import './CreateTravelLogPage.css';
import NavBar from './NavBar';

const CreateTravelLogPage = () => {
  const [rating, setRating] = useState(0);
  const [visitTime, setVisitTime] = useState('');
  const [companions, setCompanions] = useState('');
  const [review, setReview] = useState('');
  const [title, setTitle] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Travel log created');
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
  };

  return (
    <div className="create-travel-log-page">
      <NavBar/>
           
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">Create Your Travel Story</h1>
        </div>
      </Container>

     

      <Container className="mt-5">
        <Container className='back mt-5'>
          <h1 className="text-center">Share Your Experience</h1>
        </Container>
        
        
        <Row className="mt-4">
          <Col md={4}>
            <Image src={`${process.env.PUBLIC_URL}/assets/share1.jpg`} fluid />
            <h2>Oriental Pearl Tower</h2>
            <p>1 Century Avenue, Pudong New Area</p>
            <p>Shanghai, China</p>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>How would you rate this experience?</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`star ${star <= rating ? 'filled' : ''}`}
                    >
                      ○
                    </span>
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>When did you visit?</Form.Label>
                <Form.Control as="select" value={visitTime} onChange={(e) => setVisitTime(e.target.value)}>
                  <option value="">Select a time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Who did you go with?</Form.Label>
                <div>
                  {['Business', 'Couple', 'Family', 'Friends', 'Solo'].map((option) => (
                    <Button
                      key={option}
                      variant={companions === option ? 'primary' : 'outline-primary'}
                      onClick={() => setCompanions(option)}
                      className="me-2 mb-2"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Write your review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="The place was beautiful. We took a lot of photos!..."
                />
                <div className="text-muted">{review.length} characters (at least 50 characters)</div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Introduce your experience"
                />
                <div className="text-muted">{title.length} characters (up to 120 characters)</div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Add some photos</Form.Label>
                <Form.Control type="file" multiple onChange={handleImageUpload} />
                <div className="mt-2">
                  {uploadedImages.map((image, index) => (
                    <Image key={index} src={URL.createObjectURL(image)} thumbnail className="me-2 mb-2" style={{width: '100px'}} />
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                
                <Form.Check 
                  type="radio"
                  label = "Visible to others"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                
                <Form.Check 
                  
                  type="radio"
                  label="Share with the community members."
                />
              </Form.Group>

              <Button variant="outline-primary" type="submit" >Share Review</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <footer className="footer text-center py-3 mt-5">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default CreateTravelLogPage;

import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './CreateTravelLogPage.css';
import NavBar from './NavBar';

const CreateTravelLogPage = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [visitTime, setVisitTime] = useState('');
  const [companions, setCompanions] = useState('');
  const [review, setReview] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('create_travel_story'));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
  };

  const handleRating = (value) => {
    setRating(value);
  };
  const handleReset = () => {
    setRating([]);
    setVisitTime([]);
    setCompanions([]);
    setReview('');
    
    setUploadedImages([]);
  };

  return (
    <div className="create-travel-log-page">
      <NavBar/>
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">{t('create_travel_story')}</h1>
        </div>
      </Container>
      <Container className="mt-5">
        <Container className='back mt-5'>
          <h1 className="text-center">{t('share_experience')}</h1>
        </Container>
        <Row className="mt-4">
          <Col md={4}>
            <Image src={`${process.env.PUBLIC_URL}/assets/share1.jpg`} fluid />
            <h2>{t('oriental_pearl_tower')}</h2>
            <p>{t('address_1')}</p>
            <p>{t('address_2')}</p>
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>{t('rate_experience')}</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRating(star)}
                      className={`star ${star <= rating ? 'filled' : ''}`}
                      style={{ cursor: 'pointer', fontSize: '24px', color: star <= rating ? 'gold' : 'gray' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('visit_time')}</Form.Label>
                <Form.Control as="select" value={visitTime} onChange={(e) => setVisitTime(e.target.value)}>
                  <option value="">{t('select_time')}</option>
                  <option value="morning">{t('morning')}</option>
                  <option value="afternoon">{t('afternoon')}</option>
                  <option value="evening">{t('evening')}</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('companions')}</Form.Label>
                <div>
                  {['business', 'couple', 'family', 'friends', 'solo'].map((option) => (
                    <Button
                      key={option}
                      variant={companions === t(option) ? 'primary' : 'outline-primary'}
                      onClick={() => setCompanions(t(option))}
                      className="me-2 mb-2"
                    >
                      {t(option)}
                    </Button>
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('write_review')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder={t('review_placeholder')}
                />
                <div className="text-muted">{t('characters_count', { count: review.length })}</div>
              </Form.Group>
             
              <Form.Group className="mb-3">
                <Form.Label>{t('add_photos')}</Form.Label>
                <Form.Control type="file" multiple onChange={handleImageUpload} />
                <div className="mt-2">
                  {uploadedImages.map((image, index) => (
                    <Image key={index} src={URL.createObjectURL(image)} thumbnail className="me-2 mb-2" style={{width: '100px'}} />
                  ))}
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label={t('visible_to_others')}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check 
                  type="checkbox"
                  label={t('share_with_community')}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">{t('share_review')}</Button> 
              
              <Button variant="secondary" onClick={handleReset} className="reset">{t('reset')}</Button>
              
            </Form>
            
          </Col>
        </Row>
      </Container>
      <footer className="footer text-center py-3 mt-5">{t('footer_text')}</footer>
    </div>
  );
};

export default CreateTravelLogPage;
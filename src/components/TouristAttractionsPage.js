import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { GeoAlt, StarFill } from 'react-bootstrap-icons';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next';
import styles from './TouristAttractionsPage.module.css';

const TouristAttractionsPage = () => {
  const { t } = useTranslation();

  const mainAttractions = [
    {
      id: 1,
      name: t('the_bund'),
      comments: '10000+ ' + t('comments'),
      location: t('location_1'),
      intro: t('the_bund_intro'),
      ticket: t('buy_ticket'),
      images: ['attraction1-1.jpg', 'attraction1-2.jpg']
    },
    {
      id: 2,
      name: t('the_jade'),
      comments: '5000+ ' + t('comments'),
      location: t('location_2'),
      intro: t('jade_buddha_temple_intro'),
      ticket: t('buy_ticket'),
      images: ['attraction2-1.jpg', 'attraction2-2.jpg']
    },
    {
      id: 3,
      name: t('disney'),
      comments: '10000+ ' + t('comments'),
      location: t('location_3'),
      intro: t('shanghai_disneyland_intro'),
      ticket: t('buy_ticket'),
      images: ['plan.jpg', 'attraction3-2.jpg']
    },
    {
      id: 4,
      name: t('tvtower'),
      comments: '10000+ ' + t('comments'),
      location: t('location_4'),
      intro: t('oriental_pearl_tv_tower_intro'),
      ticket: t('buy_ticket'),
      images: ['attraction4-1.jpg', 'attraction4-2.jpg']
    }
  ];

  const otherAttractions = [
    { id: 1, location: t('shanghai_zoo'), ticket: '￥120', image: 'other1.jpg' },
    { id: 2, location: t('shanghai_oriental_land'), ticket: '￥25', image: 'other2.jpg' },
    { id: 3, location: t('happy_valley'), ticket: '￥130', image: 'other3.jpg' },
    { id: 4, location: t('fudan_university'), ticket: '￥0', image: 'other4.jpg' },
    { id: 5, location: t('zhu_jia_jiao'), ticket: '￥30', image: 'other5.jpg' },
    { id: 6, location: t('nanjing_road'), ticket: '￥22', image: 'other6.jpg' },
    { id: 7, location: t('xujiahui'), ticket: '￥28', image: 'other7.jpg' },
    { id: 8, location: t('yu_garden'), ticket: '￥35', image: 'other8.jpg' }
  ];

  return (
    <div className={styles.touristAttractionsPage}>
      <NavBar />
      <Container className="text-center mt-1">
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{t('must_visit_tourist_attractions')}</h1>
        </div>
      </Container>

      <Container className="text-center mt-1">
        <Row className="my-4">
          {mainAttractions.map(attraction => (
            <Col md={12} key={attraction.id} className="mb-4">
              <Card>
                <Card.Body className={styles.cardBody}>
                  <h3 className={styles.boldText}>{attraction.name}</h3>
                  <p>
                    <StarFill className={`me-2 ${styles.comment}`} />
                    {attraction.comments}
                    <GeoAlt 
                      className={`me-2 ${styles.maplogo}`} 
                      onClick={() => window.open(`https://www.google.com/maps/search/${attraction.location}`, '_blank')}
                    />
                    {t('location')}{attraction.location}
                  </p>
                  <p className={styles.align}>{attraction.intro}</p>
                  <div className={styles.attractionImagesFlexContainer}>
                    {attraction.images.slice(0, 2).map((image, index) => (
                      <div key={index} className={styles.attractionImageFlexItem}>
                        <img 
                          src={`${process.env.PUBLIC_URL}/assets/${image}`} 
                          alt={`Attraction ${attraction.id}`} 
                          className={`img-fluid ${styles.attractionImage}`} 
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    ))}
                  </div>
                  <Button className={`mt-3 ${styles.button}`} variant="outline-primary" href="https://www.ctrip.com">
                    {attraction.ticket}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={styles.background}>
          <h2 className={styles.title}>{t('other_attractions')}</h2>
        </div>
        <Row className="my-4">
          {otherAttractions.map(attraction => (
            <Col md={3} key={attraction.id} className="text-center mb-4">
              <Card className={styles.otherAttractionCard}>
                <div className={styles.otherAttractionImageContainer}>
                  <Card.Img 
                    variant="top" 
                    src={`${process.env.PUBLIC_URL}/assets/${attraction.image}`} 
                    className={styles.otherAttractionImage}
                  />
                </div>
                <Card.Body className={styles.otherAttractionBody}>
                  <Card.Title className={styles.otherAttractionTitle}>
                    {attraction.location}
                    <GeoAlt 
                      className={`ms-2 ${styles.maplogo}`} 
                      onClick={() => window.open(`https://www.google.com/maps/search/${attraction.location}`, '_blank')}
                    />
                  </Card.Title>
                  <p className={styles.otherAttractionTicket}>{t('ticket')}: {attraction.ticket}</p>
                  <Button className={styles.otherAttractionButton} variant="primary" href="https://www.ctrip.com">
                    {t('buy_ticket')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <footer className="footer text-center py-3">{t('footer_text')}</footer>
    </div>
  );
};

export default TouristAttractionsPage;

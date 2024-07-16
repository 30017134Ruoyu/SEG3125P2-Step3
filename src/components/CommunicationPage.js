import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import NavBar from './NavBar';
import { useTranslation } from 'react-i18next';
import './CommunicationPage.css';

const CommunicationPage = () => {
  const { t } = useTranslation();
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Jack Ray',
      userInfo: `${t('provider')} • 144 ${t('comments_count')}`,
      rating: 4,
      date: `July, 2023 • ${t('family')}`,
      content: `${t('comment1')}`,
      likes: 12,
      images: [
        '/assets/comment1.jpg',
        '/assets/comment2.jpg',
      ],
      reviewDate: 'September 13, 2023',
      replies: [
        { id: 1, user: 'Alice', text: 'Looks good', time: '12:00 PM' },
        { id: 2, user: 'Bob', text: 'I will go there next time.', time: '12:05 PM' },
      ],
      timestamp: new Date('2023-09-13').getTime()
    },
    {
      id: 2,
      user: 'Anonymous',
      rating: 5,
      date: `July, 2023 • ${t('family')}`,
      content: 'I really enjoyed this trip, I saw a lot of beautiful scenery and ate a lot of delicious food. I really enjoyed this trip, I saw a lot of beautiful scenery and ate a lot of delicious food.',
      likes: 3,
      reviewDate: 'September 14, 2023',
      replies: [],
      timestamp: new Date('2023-09-14').getTime()
    },
    {
      id: 3,
      user: 'Anonymous',
      rating: 5,
      date: `July, 2023 • ${t('solo')}`,
      content: 'Oriental Pearl Tower, a landmark building in Shanghai, stands on the edge of the Bund, in the center of Lujiazui. Every tourist who comes to Shanghai, whether he wants to or not, must come here to check in. The scenery is more beautiful at night than during the day.',
      likes: 10,
      reviewDate: 'September 15, 2023',
      replies: [],
      timestamp: new Date('2023-09-15').getTime()
    },
    {
      id: 4,
      user: 'Eileenlalala',
      userInfo: `${t('provider')} • 4 ${t('comments_count')}`,
      rating: 4,
      date: `July, 2023 • ${t('friends')}`,
      content: `${t('comment2')}`,
      likes: 19,
      images: [
        '/assets/comment3.jpg',
        '/assets/comment4.jpg',
      ],
      reviewDate: 'September 16, 2023',
      replies: [
        { id: 3, user: 'Alice', text: 'Looks good', time: '12:00 PM' },
        { id: 4, user: 'Bob', text: 'I will go there next time.', time: '12:05 PM' },
      ],
      timestamp: new Date('2023-09-16').getTime()
    }
  ]);

  const [newReply, setNewReply] = useState('');
  const [sortBy, setSortBy] = useState('latest'); 

  const handleLike = (id) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  const handleReply = (id) => {
    if (newReply.trim() === '') return;

    const updatedComments = comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [...comment.replies, { id: Date.now(), user: t('me'), text: newReply, time: new Date().toLocaleTimeString() }]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setNewReply('');
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: comment.replies.filter(reply => reply.id !== replyId)
        };
      }
      return comment;
    }));
  };

  const renderRating = (rating) => {
    return '●'.repeat(rating) + '○'.repeat(5 - rating);
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'latest') {
      return b.timestamp - a.timestamp;
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="communication-page">
      <NavBar />

      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">{t('community')}</h1>
        </div>
      </Container>
      
      <Container>
        <h2 className="text-center back mt-4 mb-4">{t('lets_communicate')}</h2>
        <ToggleButtonGroup type="radio" name="sortOptions" defaultValue="latest" onChange={(value) => setSortBy(value)} className="mb-3 d-flex justify-content-center">
          <ToggleButton id="tbg-radio-1" value="latest">
            {t('latest')}
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value="popular">
            {t('top')}
          </ToggleButton>
        </ToggleButtonGroup>
        <Row>
          {sortedComments.map(comment => (
            <Col md={12} key={comment.id} className="mb-4">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <Card.Title>{comment.user}</Card.Title>
                      {comment.userInfo && <small className="text-muted">{comment.userInfo}</small>}
                    </div>
                    <div className="text-success">{renderRating(comment.rating)}</div>
                  </div>
                  <Card.Subtitle className="mb-2 text-muted">{comment.date}</Card.Subtitle>
                  <Card.Text>{comment.content}</Card.Text>
                  {comment.images && (
                    <div className="d-flex overflow-auto mb-3">
                      {comment.images.map((img, index) => (
                        <img key={index} src={img} alt={`User upload ${index + 1}`} className="me-2 comment-image" />
                      ))}
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-primary" onClick={() => handleLike(comment.id)}>
                      <i className="bi bi-hand-thumbs-up"></i> {comment.likes}
                    </Button>
                    <small className="text-muted">{t('comment_date')}: {comment.reviewDate}</small>
                  </div>
                  <div className="replies mt-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="d-flex justify-content-between align-items-center mb-1">
                        <div className="reply-text"><strong>{reply.user}:</strong> {reply.text}</div>
                        <div className="d-flex align-items-center">
                          <div className="reply-time text-muted me-2">{reply.time}</div>
                          {reply.user === t('me') && (
                            <Button variant="outline-danger" size="sm" onClick={() => handleDeleteReply(comment.id, reply.id)}>
                              {t('delete')}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Form className="mt-3" onSubmit={(e) => {
                    e.preventDefault();
                    handleReply(comment.id);
                  }}>
                    <Form.Group controlId="formReply">
                      <Form.Control
                        type="text"
                        placeholder={t('add_reply')}
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-2">
                      <Button variant="primary" type="submit">{t('reply')}</Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination className="justify-content-center mt-4">
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
        </Pagination>
      </Container>
      <footer className="footer">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default CommunicationPage;
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import NavBar from './NavBar';
import './CommunicationPage.css';

const CommunicationPage = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Jack Ray',
      userInfo: 'Provider • 144 comments',
      rating: 4,
      date: 'July, 2023 • Family',
      content: 'Shanghai is a very beautiful city with convenient transportation. The prices are relatively high. The Bund is beautiful but it’s a pity that I didn’t experience it at night. The food is diverse and most people are very friendly. It’s worth a visit and a great memory!',
      likes: 12,
      images: [
        '/assets/comment1.jpg',
        '/assets/comment2.jpg',
        
      ],
      reviewDate: 'September 13, 2023',
      replies: [
        { user: 'Alice', text: 'Looks good', time: '12:00 PM' },
        { user: 'Bob', text: 'I will go there next time.', time: '12:05 PM' },
        { user: 'Cancy', text: ' replies Bob: How to get there?', time: '12:10 PM' },
        { user: 'Bob', text: 'replies Cancy: By Metro.', time: '12:15 PM' },
      ]
    },
    {
      id: 2,
      user: 'Anonymous',
      rating: 5,
      date: 'July, 2023 • Family',
      content: 'I really enjoyed this trip, I saw a lot of beautiful scenery and ate a lot of delicious food. I really enjoyed this trip, I saw a lot of beautiful scenery and ate a lot of delicious food.',
      likes: 3,
      reviewDate: 'September 13, 2023',
      replies: []
    },
    {
      id: 3,
      user: 'Anonymous',
      rating: 5,
      date: 'July, 2023 • Solo',
      content: 'Oriental Pearl Tower, a landmark building in Shanghai, stands on the edge of the Bund, in the center of Lujiazui. Every tourist who comes to Shanghai, whether he wants to or not, must come here to check in. The scenery is more beautiful at night than during the day.',
      likes: 10,
      reviewDate: 'September 13, 2023',
      replies: []
    },
    {
      id: 4,
      user: 'Eileenlalala',
      userInfo: 'provider • 4 comments',
      rating: 4,
      date: 'July, 2023 • Friends',
      content: 'The most impressive thing was the glass plank road. I went there during the day and didn’t see the sunset at the Oriental Pearl Tower. I experienced the VR roller coaster, which was a good experience. It is an iconic building and worth a visit.',
      likes: 19,
      images: [
        '/assets/comment3.jpg',
        '/assets/comment4.jpg',
        
      ],
      reviewDate: 'September 13, 2023',
      replies: [
        { user: 'Alice', text: 'Looks good', time: '12:00 PM' },
        { user: 'Bob', text: 'I will go there next time.', time: '12:05 PM' },
       
      ]
    }
  ]);

  const [newReply, setNewReply] = useState('');

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
          replies: [...comment.replies, { user: 'Me', text: newReply, time: new Date().toLocaleTimeString() }]
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setNewReply('');
  };

  const renderRating = (rating) => {
    return '●'.repeat(rating) + '○'.repeat(5 - rating);
  };

  return (
    <div className="communication-page">
      <NavBar/>
      <Container className="text-center mt-1">
        <div className="title-container">
          <h1 className="title">community</h1>
        </div>

        <Container className='back mt-5'>
          <h1 className="text-center">Let's Communicate with others</h1>
        </Container>
        <Row className="my-4">
          

        
          {comments.map(comment => (
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
                        <img key={index} src={img} alt={`User upload ${index + 1}`} className="me-2" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      ))}
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="outline-primary" onClick={() => handleLike(comment.id)}>
                      <i className="bi bi-hand-thumbs-up"></i> {comment.likes}
                    </Button>
                    <small className="text-muted">Comment Date: {comment.reviewDate}</small>
                  </div>
                  <div className="replies mt-3">
                    {comment.replies.map((reply, index) => (
                      <div key={index} className="d-flex justify-content-between align-items-center mb-1">
                        <div className="reply-text"><strong>{reply.user}:</strong> {reply.text}</div>
                        <div className="reply-time text-muted">{reply.time}</div>
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
                        placeholder="Add a reply..."
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-end mt-2">
                      <Button variant="primary" type="submit">Reply</Button>
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
      <footer className="footer text-center py-3">© 2024 View Shanghai. All rights reserved.</footer>
    </div>
  );
};

export default CommunicationPage;

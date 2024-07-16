import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContext';
import './NavBar.css';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isLoggedIn, login, logout } = useAuth();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="navbar">
        <Container>
          <Link to="/" className="navbar-brand">i-Shanghai</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={t('Explore')} id="have-fun-dropdown">
                <Link to="/tourist-attractions" className="dropdown-item">{t('tourist_attractions')}</Link>
                <Link to="/food-recommendations" className="dropdown-item">{t('restaurant_recommendations')}</Link>
              </NavDropdown>
              <NavDropdown title={t('share_your_mood')} id="share-mood-dropdown">
                <Link to="/create-travel-log" className="dropdown-item">{t('share_my_story')}</Link>
                <Link to="/communication" className="dropdown-item">{t('communicate_with_others')}</Link>
              </NavDropdown>
            </Nav>
            <Nav className="mx-auto">
              {isLoggedIn ? (
                <NavDropdown title={t('welcome')} id="user-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>{t('logout')}</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button variant="outline-light" onClick={handleLoginClick}>{t('login')}</Button>
              )}
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title={t('support')} id="get-help-dropdown">
                <Link to="/practical-info" className="dropdown-item">{t('practical_info')}</Link>
                <Link to="/faq" className="dropdown-item">{t('faq')}</Link>
              </NavDropdown>
              <Link to="/planning-trip" className="nav-link">
                <i className="bi bi-person-circle"></i> {t('plan_trip')}
              </Link>
              <NavDropdown title={t('language')} id="language-dropdown">
                <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('zh')}>中文</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{t('login')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;

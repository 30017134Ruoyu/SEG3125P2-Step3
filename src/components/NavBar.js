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
      <Navbar bg="dark" expand="lg" className="navbar" role="navigation" aria-label="Main Navigation">
        <Container>
          <Link to="/" className="navbar-brand">i-Shanghai</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={t('Explore')} id="have-fun-dropdown" role="menu" aria-label="Explore Menu">
                <Link to="/tourist-attractions" className="dropdown-item">{t('tourist_attractions')}</Link>
                <Link to="/food-recommendations" className="dropdown-item">{t('restaurant_recommendations')}</Link>
              </NavDropdown>
              <NavDropdown title={t('share_your_mood')} id="share-mood-dropdown" role="menu" aria-label="Share Your Mood Menu">
                <Link to="/create-travel-log" className="dropdown-item">{t('share_my_story')}</Link>
                <Link to="/communication" className="dropdown-item">{t('communicate_with_others')}</Link>
              </NavDropdown>
            </Nav>
            <Nav className="mx-auto">
              {isLoggedIn ? (
                <NavDropdown title={t('welcome')} id="user-dropdown" role="menu" aria-label="User Menu">
                  <NavDropdown.Item onClick={handleLogout}>{t('logout')}</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button variant="outline-light" onClick={handleLoginClick} aria-label="Login">{t('login')}</Button>
              )}
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title={t('support')} id="get-help-dropdown" role="menu" aria-label="Support Menu">
                <Link to="/practical-info" className="dropdown-item">{t('practical_info')}</Link>
                <Link to="/faq" className="dropdown-item">{t('faq')}</Link>
              </NavDropdown>
              <Link to="/planning-trip" className="nav-link" aria-label="Plan Trip">
                <i className="bi bi-person-circle"></i> {t('plan_trip')}
              </Link>
              <NavDropdown title={t('language')} id="language-dropdown" role="menu" aria-label="Language Menu">
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
              <Form.Label>{t('username')}</Form.Label>
              <Form.Control type="text" placeholder={t('enter_username')} aria-label="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{t('password')}</Form.Label>
              <Form.Control type="password" placeholder={t('password')} aria-label="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('login')}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;

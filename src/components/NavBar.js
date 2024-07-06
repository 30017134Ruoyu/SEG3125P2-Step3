import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar">
      <Container>
        <Link to="/" className="navbar-brand">i-Shanghai</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Have fun" id="have-fun-dropdown">
              <Link to="/tourist-attractions" className="dropdown-item">Tourist Attractions</Link>
              <Link to="/food-recommendations" className="dropdown-item">Restaurant Recommendations</Link>
            </NavDropdown>
            <NavDropdown title="Share mood" id="share-mood-dropdown">
              <Link to="/create-travel-log" className="dropdown-item">Share My Story</Link>
              <Link to="/communication" className="dropdown-item">Communicate with Others</Link>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="Get help" id="get-help-dropdown">
              <Link to="/practical-info" className="dropdown-item">Practical Information</Link>
            </NavDropdown>
            <Link to="/planning-trip" className="nav-link">
              <i className="bi bi-person-circle"></i> Plan Trip
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

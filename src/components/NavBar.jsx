import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import planet from './planet.png';

function NavBar() {
  return (
    <Navbar activekey={window.location.pathname} expand="md" sticky="top" className="Navbar bg-white">
      <Container className="NavContainer">
        <LinkContainer to="/space_travelers_hub/" rel="noopener noreferrer">
          <Navbar.Brand>
            <img src={planet} alt="logo" />
            <h3>Space Travelers&apos; Hub</h3>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto d-flex">
            <LinkContainer to="/" rel="noopener noreferrer">
              <Nav.Link>Rockets</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Missions" rel="noopener noreferrer">
              <Nav.Link>Missions</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/MyProfile/" rel="noopener noreferrer">
              <Nav.Link>
                <span>|</span>
                <span>My Profile</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>

  );
}

export default NavBar;

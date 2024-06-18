import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './header.scss';
import logo from '../../assets/logo/logo8.png';

export default function Header() {
  return (
    <div className="nav">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="nav-logo d-inline-block align-middle mr-2"
              width="120"
              alt="logo-img"
              src={logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-collapse' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-bar">Home</Nav.Link>
              <Nav.Link href="/search" className="nav-bar">Search</Nav.Link>
              <Nav.Link href="/contact" className="nav-bar">Contact</Nav.Link>
              <Nav.Link href="/reviews" className="nav-bar">Reviews</Nav.Link>
              <NavDropdown title="Wine Generator" id="basic-nav-dropdown">
              <NavDropdown.Item href="/wine-generator">Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/red">Red Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/white">White Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/sparkling">Sparkling Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/port">Port Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/rose">Rose Wine Generator</NavDropdown.Item>
                <NavDropdown.Item href="/wines/dessert">Dessert Wine Generator</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

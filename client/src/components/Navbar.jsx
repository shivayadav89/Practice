import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/plans', label: 'Plans' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <BootstrapNavbar 
      expanded={expanded} 
      className="navbar"
      expand="lg"
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          JUST FITNESS
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="text-white"
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => {
                  setExpanded(false);
                  window.scrollTo(0, 0);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
            <Nav.Link
              as={Link}
              to="/join"
              className="btn btn-primary ms-lg-3"
              onClick={() => {
                setExpanded(false);
                window.scrollTo(0, 0);
              }}
            >
              Join Now
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;

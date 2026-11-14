import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <Col md={4} className="footer-brand">
            <h3>JUST FITNESS</h3>
            <p>Transform Your Body, Transform Your Life. Join the premier fitness experience.</p>
            <div className="social-links mt-3">
              <a href="https://facebook.com/justfitness" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/justfitness" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com/@justfitness" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaYoutube size={24} />
              </a>
              <a href="https://twitter.com/justfitness" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
            </div>
          </Col>
          
          <Col md={2} className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/plans">Membership</a></li>
              <li><a href="/trainers">Trainers</a></li>
            </ul>
          </Col>
          
          <Col md={2} className="footer-links">
            <h4>More</h4>
            <ul>
              <li><a href="/facilities">Facilities</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/join">Join Now</a></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-contact">
            <h4>Contact Us</h4>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2 text-gold" />
              123 Fitness Street, Gym District, City
            </p>
            <p className="mb-2">
              <FaPhone className="me-2 text-gold" />
              +91 89578 19107
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-2 text-gold" />
              info@justfitness.com
            </p>
          </Col>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Just Fitness. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
